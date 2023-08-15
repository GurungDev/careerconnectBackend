const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/dbConnection");
const router = require("./router/router.js");
connectToDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.listen(8000, () => {
  console.log("Listening");
});
