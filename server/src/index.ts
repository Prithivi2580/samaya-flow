import "dotenv/config";
import express, { type Express } from "express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { auth } from "./lib/auth";

const app: Express = express();

// CORS FIRST!
app.use(
  cors({
    origin: process.env.FRONTEND_URL!,
    credentials: true,
  }),
);

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Auth handler AFTER CORS

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
