const express = require("express");
const mongoose = require('mongoose')

const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3001;
// Serve up static assets (usually on heroku)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/livingcost",
  // { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );
// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

