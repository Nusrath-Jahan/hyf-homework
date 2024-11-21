import knex from "knex";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);


contactsAPIRouter.get("/", async (req, res) => {
    let query = knexInstance.select("*").from("contacts");

    if ("sort" in req.query) {
      const validColumns = ["first_name", "last_name", "id"];
      const sortParams = req.query.sort.split(" "); // 'first_name ASC' => ['first_name', 'ASC']

      const column = sortParams[0];
      const order = sortParams[1] && sortParams[1].toUpperCase() === "DESC" ? "DESC" : "ASC";

      // Validate column name to prevent SQL injection
      if (validColumns.includes(column)) {
        query = query.orderBy(column, order);
      } else {
        return res.status(400).json({ error: "Invalid sort column" });
      }
    }

    try {
      const data = await query;
      res.json({ data });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Internal server error" });
    }
  });

//////////////////////

//http://localhost:3000/api/contacts?sort=first_name%20ASC; DROP TABLE contacts;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
