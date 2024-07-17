const { CustomApiError } = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomApiError("Please provide a username or a password", 400);
  }
  res.send("Fake Login/register/Signup Route");
};

const dashboard = async (_, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: "Hello, Jane Doe",
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
