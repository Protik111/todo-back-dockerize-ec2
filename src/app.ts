import express, { Application, Request, Response } from "express";
import config from "./config";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(config.port, () => {
  console.log(`Listening to ${config.port}`);
});
