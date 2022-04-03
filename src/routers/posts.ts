import express from "express";
import prisma from "../utils/prisma";

const postRouter = express.Router();

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
export default postRouter;
