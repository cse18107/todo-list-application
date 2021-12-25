const express = require("express");
const router = express.Router();
const tasks = require("../models/taskSchema");



// post a task in database
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
});

// get all task from database
router.get("/gettask",async(req,res)=>{
    try{
        const task = await tasks.find();
        res.status(201).send(task);
    }catch(error){
        res.status(422).json(error);
    }
})


// get a task from database

router.get("/gettask/:id",async(req,res)=>{
    try{
        console.log(req.params);
        const {id} = req.params;
        console.log(id);
        const task = await tasks.findById({_id:id});

        console.log(task);

        res.status(201).json(task);
    }catch(error){
        res.status(422).json(error);
    }
});

// update task
router.patch("/updatetask/:id",async(req,res)=>{
    try{
        const { id } = req.params;

        const updatedTask = await tasks.findByIdAndUpdate(id,req.body,{
            new:true,
        });

        console.log(updatedTask);
        res.status(201).json(updatedTask);
    }catch(error){
        res.status(422).json(error);
    }
});

module.exports = router;



