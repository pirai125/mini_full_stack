const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path")

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3700;

const cors_options = require("./Middleware/cors_handler");
app.use(cors(cors_options));
app.use(bodyParser.json());
app.use(express.static("./public"))




app.use("/", require("./Routes/route"));
app.listen(PORT, () => console.log("Connected on " + PORT));
