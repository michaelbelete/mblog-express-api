import { Prisma } from "@prisma/client";
import express from "express";
import prisma from "../utils/prisma";

const postRouter = express.Router();

//fetch all posts with search and pagination
postRouter.get("/", async (req, res) => {
  const { q, skip, take, orderBy } = req.query;

  const queries: Prisma.PostWhereInput = q
    ? {
        OR: [
          { title: { contains: q as string } },
          { content: { contains: q as string } },
        ],
      }
    : {};

  const posts = await prisma.post.findMany({
    where: {
      ...queries,
    },
    include: { author: true },
    take: Number(take) || undefined,
    skip: Number(skip) || undefined,
    orderBy: {
      updatedAt: orderBy as Prisma.SortOrder,
    },
  });

  res.json(posts);
});

//fetch specific post
postRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const post = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });

    res.json(post);
  } catch (error) {
    res.json({ error: "Post with ID ${id} does not exist in the database" });
  }
});

//create a new post
postRouter.post("/", async (req, res) => {
  const { title, content, authorEmail } = req.body;
  const result = await prisma.post.create({
    data: {
      title,
      content,
      author: { connect: { email: authorEmail } },
    },
  });
  res.json(result);
});

//delete a post
postRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(post);
});

export default postRouter;
