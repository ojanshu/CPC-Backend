//importing express and everything else to make app.js work
const express = require("express");
const app = express();
const data = require("./routes/route");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

//to use frontend (which i have not created)
app.use(express.static("./public"))

//to parse json data
app.use(express.json());

//specifies the basic api route
app.use("/api/v1/data", data)

//uses middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

//to connect it to the PORT given else 3000
const port= process.env.PORT || 3000;

const start = async () => {
    try {
        //this gets MONGO_URI from .env file to connect to the database
        await connectDB(process.env.MONGO_URI);
        app.listen( port, console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();