import "dotenv/config";
import express, { type Express } from "express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { auth } from "./lib/auth.lib";

const app: Express = express();

const CLIENT_URL = process.env.CLIENT_URL ?? "http://localhost:5173";

// CORS FIRST!
app.use(
  cors({
    origin: CLIENT_URL,
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
