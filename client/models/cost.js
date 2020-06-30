const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//city on dropdown, job selection and other city (dropdown 2) will capture -> then go to api call


const costSchema = new Schema({
title: {
    type: String,
    required: true
}

})

const Cost = mongoose.model("livingcost", costSchema);

module.exports = Cost;