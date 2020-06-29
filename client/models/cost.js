const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const costSchema = new Schema({
title: {
    type: String,
    required: true
}

})

const Cost = mongoose.model("googlebooks", costSchema);

module.exports = Cost;