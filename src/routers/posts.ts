import express from 'express';

const postRouter = express.Router();

postRouter.get("/", (res, req) => {
    req.send("posts")
})

export default postRouter;