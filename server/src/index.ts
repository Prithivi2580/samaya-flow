import express, { type Express } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.lib";

const app: Express = express();

app.all("/api/auth/*splat", toNodeHandler(auth));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
