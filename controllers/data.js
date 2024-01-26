//imports the schema for the data to be entered
const Data = require("../models/Data");

//imports function to display error
const {createCustomError} = require("../errors/custom-error")

//imports a middleware to eliminate the repetitive use of async arrow functions
const asyncWrapper = require("../middleware/async-wrapper")

//fucntion used to get all the data entered
const getAllData =  asyncWrapper( async (req,res) => {
    const data = await Data.find({})
    res.status(200).json({data});
})

//function used to create new data
const createData = asyncWrapper(async (req,res) => {
    const data = await Data.create(req.body);
    res.status(201).json({data});
})

//fucntion to get single data using id
const getData = asyncWrapper(async(req,res) => {
    const {id: DataId} = req.params;
    const data = await Data.findOne({_id:DataId});
    if (!data) {
        res.status(404).json({ error: `No data with this ID: ${DataId}` });
      } else {
        res.status(200).json({ data });
      }
})

//function used to update a specific data using id
const updateData = asyncWrapper(async(req,res) => {
    const {id: DataID} = req.params;
    const data = await Data.findOneAndUpdate({_id: DataID}, req.body, {
            new:true,
            runValidators:true,
        });
    // if (!data){
    //     return next(createCustomError(`No task with this id: ${DataId}`,404))
    // }
    // res.status(200).json({ data })
    if (!data) {
        res.status(404).json({ error: `No data with this ID: ${DataId}` });
      } else {
        res.status(200).json({ data });
      }
})

//fucntion to delete existing data using id
const deleteData =  asyncWrapper (async (req,res) => {

    const {id:DataID} = req.params;
    const data = await Data.findOneAndDelete({_id:DataID});
    if (!data){
        return next(createCustomError(`No task with this id: ${DataID}`,404))
    }
    res.status(200).json({data});

})

//exporting all the functions to route to handle http requests
module.exports = {getAllData, 
    createData, 
    getData, 
    updateData, 
    deleteData};