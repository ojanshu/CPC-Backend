const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, "needed"],
        trim : true,
        maxlength : [21, "cannot be more than 21 characters"]
    },
    data : {
        type : String,
        required : [true, "needed"],
        maxlength : [150, "cannot be more than 150 characters"]
    }
})

module.exports = mongoose.model("Data", DataSchema);