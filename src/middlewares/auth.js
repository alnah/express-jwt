require("dotenv").config();
const jwt = require("jsonwebtoken");

const { CustomApiError } = require("../errors/custom-error");

const jwtSecret = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomApiError("Invalid credentials: provide a valid token", 401);
  }
  const token = authHeader.split(" ")[1];
  try {
    const { id, username } = jwt.verify(token, jwtSecret);
    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomApiError("Invalid token: you can't access this route", 401);
  }
};

module.exports = authMiddleware;
