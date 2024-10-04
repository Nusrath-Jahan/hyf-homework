import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

// Load documents from JSON file
let documents = JSON.parse(fs.readFileSync("documents.json", "utf-8"));

// GET /
app.get("/", (req, res) => {
  res.send("This is a search engine");
});

// GET /search - Search for documents based on query parameter q
app.get("/search", (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.json(documents); // Return all documents if no query
  }

  // Filter documents based on any field that matches the query
  const results = documents.filter((doc) =>
    Object.values(doc).some(
      (value) => typeof value === "string" && value.includes(query)
    )
  );

  return res.json(results);
});

// GET /documents/:id - Fetch a document by its ID
app.get("/documents/:id", (req, res) => {
  const { id } = req.params;
  const document = documents.find((doc) => doc.id == id);

  if (!document) {
    return res.status(404).json({ message: "Document not found" });
  }

  return res.json(document);
});

// POST /search - Search based on fields in the body or query parameter q
app.post("/search", (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    return res
      .status(400)
      .json({ message: "Cannot provide both query and fields" });
  }

  let results = documents;

  if (query) {
    results = results.filter((doc) =>
      Object.values(doc).some(
        (value) => typeof value === "string" && value.includes(query)
      )
    );
  }

  if (fields) {
    Object.keys(fields).forEach((field) => {
      results = results.filter((doc) => doc[field] == fields[field]);
    });
  }

  return res.json(results);
});

// Start server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
