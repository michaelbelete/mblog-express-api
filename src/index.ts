import app from "./utils/app";

import userRouter from "./routers/users";
import postRouter from "./routers/posts";
import categoryRouter from "./routers/category";

const port = process.env.PORT || 8000;

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);
app.listen(port, () => {
  console.log(`
🚀 Server ready at: http://localhost:${port}`);
});
