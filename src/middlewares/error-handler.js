const errorHandlerMiddleware = (err, _, res) => {
  console.error(err);
  res.status(500).json({
    message: "An internal server error occurred",
    error: err.message,
  });
};

module.exports = errorHandlerMiddleware;
