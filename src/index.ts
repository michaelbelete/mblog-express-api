import prisma from "./utils/prisma";
import app from "./utils/app";

import userRouter from './routers/users'
import postRouter from "./routers/posts";

const port = process.env.PORT || 3000;

app.use('/users', userRouter)
app.use('/posts', userRouter)

app.listen(port, () => {
  console.log(`
🚀 Server ready at: http://localhost:${port}`);
});
