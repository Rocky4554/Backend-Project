import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "10kb",
  })
);

app.use(
  express.urlencoded({
    extend: true,
    limit: "10kb",
  })
);
app.use(express.static("public"));

app.use(cookieParser());

// importing routes
import { userRouter } from "./routes/user.routes.js";

//routes declaration

app.use("/api/v1/user", userRouter);


