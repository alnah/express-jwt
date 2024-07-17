require("dotenv").config();
require("express-async-error");

const express = require("express");

const routeNotFoundMiddleware = require("./middlewares/route-not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routeNotFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(3000, () => console.log(`Server is listening on port ${port}`));
