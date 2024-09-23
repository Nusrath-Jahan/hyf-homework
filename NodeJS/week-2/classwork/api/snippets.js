// Contents of api/snippets.js
import knex from "../database.js";

import express from "express";
const router = express.Router();

// GET /api/snippets
router.get("/api/snippets", async (request, response) => {
  response.send("Hello Nusrath!");
});

// TODO: POST /api/snippets
router.post("/api/snippets", async (request, response) => {
    response.send("Helloooo");
  });
  
// TODO: GET /api/snippets/:id

export default router;
