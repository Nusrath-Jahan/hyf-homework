// Contents of api/snippets.js
import knex from "../database.js";

import express from "express";
const router = express.Router();

// GET /api/snippets
router.get("/", async (request, response) => {
  response.send("Hello Nusrath!");
});

// TODO: POST /api/snippets
router.post("/api/snippets", async (request, response) => {
  response.send(
    knex("snippets").insert([
      { title: "Snippet title" },
      { contents: "#hello" },
      { is_private: false },
    ])
  );
});

// TODO: GET /api/snippets/:id

export default router;
