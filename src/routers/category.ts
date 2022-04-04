import express from "express";
import prisma from "../utils/prisma";

const categoryRouter = express.Router();

categoryRouter.get("/:name", async (req, res) => {
  const { name } = req.params;
  const posts = await prisma.category.findMany({
    where: {
      name: name,
    },
  });

  res.json(posts);
});

categoryRouter.post("/", async (req, res) => {
  const { name } = req.body;

  try {
    const category = await prisma.category.create({
      data: {
        name: name,
      },
    });

    res.json(category);
  } catch (error) {
    res.json({ message: "error occurred", error: error });
  }
});

categoryRouter.delete("/:id", async (res, req) => {
  const { id } = res.params;

  const category = await prisma.category.delete({
    where: {
      id: Number(id),
    },
  });

  req.json(category)
});

export default categoryRouter;
