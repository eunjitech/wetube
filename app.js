import "core-js";
import express from 'express';
import morgan from 'morgan';
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

// middleware
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
app.set("view engine", "pug"); // 뷰엔진을 퍼그로 바꿈
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// middleware
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(localsMiddleware);

// router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
