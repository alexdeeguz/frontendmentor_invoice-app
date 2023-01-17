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

const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "/client/build")));
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
