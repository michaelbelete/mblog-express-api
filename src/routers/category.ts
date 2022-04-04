import express from "express";
import prisma from "../utils/prisma";

const categoryRouter = express.Router();

categoryRouter.get("/:name", async (res, req) => {
  const { name } = res.params;
  const posts = await prisma.category.findMany({
    where: {
      name: name,
    },
  });

  req.json(posts)
});

export default categoryRouter;
