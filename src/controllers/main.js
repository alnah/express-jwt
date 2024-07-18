require("dotenv").config();
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");

const { CustomApiError } = require("../errors/custom-error");

const jwtSecret = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    throw new CustomApiError("Please provide a username or a password", 400);
  // use for demonstration, normally provided by the database
  const id = uuid();
  // try to keep the payload small, better experience for user
  const token = jwt.sign({ id, username }, jwtSecret, { expiresIn: "30d" });
  res.send({ message: "user created", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomApiError("Invalid credentials: provide a valid token", 401);
  }
  const token = authHeader.split(" ")[1];
  console.log(token);
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: "Hello, Jane Doe",
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
