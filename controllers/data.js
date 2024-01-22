const Data = require("../models/Data");
const {createCustomError} = require("../errors/custom-error")
const asyncWrapper = require("../middleware/async-wrapper")

const getAllData =  asyncWrapper( async (req,res) => {
    const data = await Data.find({})
    res.status(200).json({data});
})

const createData = asyncWrapper(async (req,res) => {
    const data = await Data.create(req.body);
    res.status(201).json({data});
})

const getData = asyncWrapper(async(req,res) => {
    const {id: DataId} = req.params;
    const data = await Data.findOne({_id:DataId});
    // if(!data) {
    //     return next(createCustomError(`No data with this ID: ${DataId}`, 404))
    // }
    if (!data) {
        res.status(404).json({ error: `No data with this ID: ${DataId}` });
      } else {
        res.status(200).json({ data });
      }
})

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

const deleteData =  asyncWrapper (async (req,res) => {

    const {id:DataID} = req.params;
    const data = await Data.findOneAndDelete({_id:DataID});
    if (!data){
        return next(createCustomError(`No task with this id: ${DataID}`,404))
    }
    res.status(200).json({data});

})

module.exports = {getAllData, 
    createData, 
    getData, 
    updateData, 
    deleteData};