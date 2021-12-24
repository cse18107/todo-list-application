const express = require("express");
const router = express.Router();
const tasks = require("../models/taskSchema");

router.post("/add",async(req,res)=>{
    const {title,description,date,color} = req.body;
    if(!title||!description||!date||!color){
        res.status(422).json("Please fill all the fields");
    }

    try{
        const addTask = new tasks({title,description,date,color});
        await addTask.save();
        res.status(201).json(addTask);
        console.log(addTask);
    }catch(error){
        res.status(422).json(error);
    }
})

module.exports = router;



