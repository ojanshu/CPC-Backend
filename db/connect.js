//it is used to connect to the database
const mongoose= require("mongoose");

const connectDB = function (url) {
    return mongoose.connect(url, {useNewUrlParser: true,
        useCreateIndex : true,
        useFindAndModify: false,
        useUnifiedTopology: true});
}

module.exports = connectDB;