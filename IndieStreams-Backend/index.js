import express, { json } from "express";
import cors from "cors";
import mysql from "mysql";
import fileUpload from "express-fileupload";

const app = express();
const port = 3000;
const dataB = "indiestreams";

app.use(cors());
app.use(express.json());
app.use(fileUpload());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: dataB,
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  db.query(
    "INSERT INTO users (name, email, password) VALUES (?,?,?)",
    [name, email, password],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("values added");
      }
    }
  );
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT name FROM users WHERE email = ? AND password = ?",
    [email, password],
    (error, results) => {
      res.send(results.length > 0);
    }
  );
});

app.post("/user", async (req, res) => {
  const { email, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (error, results) => {
      res.json(results);
    }
  );
});

app.post("/upload", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const { title, description, user } = req.body;

  const video = req.files.videoFile;
  const poster = req.files.posterFile;

  video.mv(`../Server/movies/${title}-video.mp4`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
  poster.mv(`../Server/movies/${title}-poster.jpg`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });

  db.query(
    "INSERT INTO movies (title, description, video, poster, user) VALUES (?,?,?,?,?)",
    [
      title,
      description,
      `http://localhost:8080/movies/${title}-video.mp4`,
      `http://localhost:8080/movies/${title}-poster.jpg`,
      user,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        if (err.errno == 1062) {
          res.send("1062");
        }
      } else {
        res.send("200");
      }
    }
  );
});

app.get("/popular", (req, res) => {
  db.query("SELECT * FROM movies", (err, result) => {
    res.json(result);
  });
});

app.get("/my-movies/:email", (req, res) => {
  const { email } = req.params;
  db.query("SELECT * FROM movies WHERE user = ?", [email], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

app.get("/movie/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM movies WHERE (id) = (?)", [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
