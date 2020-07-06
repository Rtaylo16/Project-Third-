const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const costSchema = new Schema({
    value:{type: String, required: true},
    value2:{type: String, required: true},
    job:{type:String, required: true},
    cost:{type: Number, required:true}
});

const Cost = mongoose.model("Cost", costSchema);

module.exports = Cost