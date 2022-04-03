import { User } from '@prisma/client';
import express from 'express'
import prisma from '../utils/prisma';

const userRouter = express.Router()

userRouter.post("/signup", async (req,res) => {
    const { email, username, password  } = req.body

    const user: User  = await prisma.user.create({
        data: {
            email,
            username,
            password
        }
    })

    res.json(user)
})



export default userRouter;