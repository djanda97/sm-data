const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getAllEnemies = (request, response) => {
  pool.query("SELECT * FROM enemies", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// app.get("/api/enemies/:name", (request, response) => {
//   const name = request.params.name;
//   // const { name, health } = request.body;
//   console.log(`name: ${name}`);

//   pool.query(
//     "SELECT * FROM enemies WHERE name=($1)",
//     [name],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).json(results.rows);
//     }
//   );
// });

const queryHealth = (request, response) => {
  const health = request.params.health;
  console.log(`health: ${health}`);

  pool.query(
    "SELECT * FROM enemies WHERE health > ($1)",
    [health],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// Generic route
// app.get("/api/enemies/:field", (request, response) => {
//   const field = request.params.field;
//   console.log(`field: ${field}`);

//   pool.query(
//     `SELECT * FROM enemies WHERE ${field} > ($1)`,
//     [field],
//     (error, results) => {
//       if (error) {
//         throw error;""
//       }
//       response.status(200).json(results.rows);
//     }
//   );
// });

app.route("/api/enemies").get(getAllEnemies);
app.route("/api/enemies/:health").get(queryHealth);

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
