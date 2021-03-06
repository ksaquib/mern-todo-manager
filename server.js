const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { mongoURI } = require("./config/keys");

const app = express();

//BodyParser Middleware
app.use(express.json());

//DB Config
const db = mongoURI;

//Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", require("./routes/items"));
app.use("/api/register", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
