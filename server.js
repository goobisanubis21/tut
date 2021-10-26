const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes");
const router = require("express").Router();

// Define middleware here
app.use(express.urlencoded({limit: '50mb', extended: true }));
app.use(express.json({limit: '50mb'}));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.set('useFindAndModify', false);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/boredomuser",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Use apiRoutes
app.use(apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});