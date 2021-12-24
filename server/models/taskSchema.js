const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    }
});

const tasks = new mongoose.model("tasks",taskSchema);

module.exports = tasks;