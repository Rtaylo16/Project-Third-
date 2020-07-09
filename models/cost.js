const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const details = new Schema({
    color: {type:String, required: true},
    name: {type:String, required: true},
    score_out_of_10: {type:Number, required: true}

})

const costSchema = new Schema({
    value:{type: String, required: true},
    value2:{type: String, required: true},
    job:{type:String, required: true},
    salary:{type: Number, required:true},
    details: [details]
});

const Cost = mongoose.model("Cost", costSchema);

module.exports = Cost