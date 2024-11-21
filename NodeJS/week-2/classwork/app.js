import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

import snippetsRouter from "./api/snippets.js";
app.use("/api/snippets", snippetsRouter);

app.get("/", (req, res) => {
  res.send("Hello Hi!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
