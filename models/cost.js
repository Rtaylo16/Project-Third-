const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const costSchema = new Schema({
    value:{type: String, required: true},
    label:{type: String, required: true},
    cost:{type: Number, required:true}
});

const Cost = mongoose.model("Cost", costSchema);

module.exports = Cost