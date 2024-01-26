//imports express and uses one of its module (Router)
const express = require("express")
const router = express.Router();

//imports all the functions to handle data from controllers
const {getAllData, 
    createData, 
    getData, 
    updateData, 
    deleteData} = require("../controllers/data")

//it handles all https requests for the functions
router.route("/").get(getAllData).post(createData);
router.route("/:id").get(getData).patch(updateData).delete(deleteData);

module.exports = router