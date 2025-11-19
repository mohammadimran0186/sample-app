const express = require("express");
const { Client } = require("pg");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Sample Node.js App running locally!");
});

app.get("/db", async (req, res) => {
  const client = new Client({
    host: process.env.POSTGRES_HOST || "localhost",
    port: process.env.POSTGRES_PORT || 5432,
    database: process.env.POSTGRES_DB || "myappdb",
    user: process.env.POSTGRES_USER || "pguser",
    password: process.env.POSTGRES_PASSWORD || "pgpassword"
  });

  try {
    await client.connect();
    const result = await client.query("SELECT NOW()");
    await client.end();
    res.json({ db_time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));
