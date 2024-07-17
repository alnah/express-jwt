const login = async (_, res) => res.send("Fake Login/register/Signup Route");

const dashboard = async (_, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: "Hello, Jane Doe",
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

exports.module = { login, dashboard };
