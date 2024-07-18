const { StatusCodes } = require("http-status-codes");

const { CustomApiError } = require("../errors");

// next is used by express-async-errors
// eslint-disable-next-line no-unused-vars
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "An internal server error occurred",
      error: err.message || "Unknown error",
    });
  }
};

module.exports = errorHandlerMiddleware;
