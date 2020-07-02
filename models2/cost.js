const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//city on dropdown, job selection and other city (dropdown 2) will capture -> then go to api call


const costSchema = new Schema({
    city_id: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    city_id2: {
        type: String,
        required: true
    },
    city_name2: {
        type: String,
        required: true
    },


})

const Cost = mongoose.model("livingcost", costSchema);

module.exports = Cost;