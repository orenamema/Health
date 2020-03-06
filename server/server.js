const express = require("express");
var cors = require("cors");
var createMock = require("./mockData/mockData.js");
var db = require("./models");
const routes = require("./routes");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Error handling
app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // Send the error rather than to show it on the console
    res.status(401).send(err);
  } else {
    next(err);
  }
});

var syncOptions = { force: true };

db.sequelize.sync(syncOptions).then(function() {
    console.log(Object.keys(db));
    createMock();
	// Start the API server
	app.listen(PORT, function() {
	  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});