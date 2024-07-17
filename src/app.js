require("dotenv").config();
require("express-async-errors");

const express = require("express");

const routesMain = require("./routes/main");
const routeNotFoundMiddleware = require("./middlewares/route-not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1/", routesMain);
app.use(routeNotFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
