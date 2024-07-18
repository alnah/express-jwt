require("dotenv").config();
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");
const { StatusCodes } = require("http-status-codes");

const { BadRequest } = require("../errors");

const jwtSecret = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    throw new BadRequest("Please provide a username or a password");
  // use for demonstration, normally provided by the database
  const id = uuid();
  // try to keep the payload small, better experience for user
  const token = jwt.sign({ id, username }, jwtSecret, { expiresIn: "30d" });
  res.send({ message: "user created", token });
};

const dashboard = async (req, res) => {
  const { username } = req.user;
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(StatusCodes.OK).json({
    message: `Hello, ${username.charAt(0).toUpperCase()}${username.slice(1)}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
module.exports = { login, dashboard };
