const fs = require("fs");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");
const path = require("path");

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "unauthorized" });
  }

  next();
});

server.use(jsonServer.defaults());
server.use(router);

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
  );

  const { users } = db;

  const userFromBd = users.find(
    (user) => user.username === username && useReducer.password === password
  );

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: "unauthorized" });
});

server.listen(8000, () => {
  console.log("server running on port 8000 ");
});
