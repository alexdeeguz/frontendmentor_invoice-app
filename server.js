const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(`connected to db...`))
  .catch((err) => console.log(err));

app.use("/api/invoices", require("./routes/api/invoices"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
