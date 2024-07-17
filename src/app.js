require("dotenv").config();
const express = require("express");

const routeNotFoundMiddleware = require("./middlewares/route-not-found");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routeNotFoundMiddleware);

app.listen(3000, () => console.log(`Server is listening on port ${port}`));
