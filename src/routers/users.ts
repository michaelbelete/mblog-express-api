import { User } from "@prisma/client";
import express from "express";
import prisma from "../utils/prisma";

const userRouter = express.Router();

//create account
userRouter.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;

  const user: User = await prisma.user.create({
    data: {
      email,
      username,
      password,
    },
  });

  res.json(user);
});

// fetch all users
userRouter.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});



export default userRouter;
