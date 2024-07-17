const { CustomApiError } = require("../errors/custom-error");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res.status(500).json({
      message: "An internal server error occurred",
      error: err.message || "Unknown error",
    });
  }
};

module.exports = errorHandlerMiddleware;
