const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || );

app.listen(PORT, function() {
    console.log(`Server now listening on PORT ${PORT}!`);
});