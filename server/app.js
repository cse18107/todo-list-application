
const mongoose = require("mongoose");
require("./db/conn");
const task=require("./models/taskSchema");
const cors = require('cors');
const router = require("./routes/router");
const express = require('express');
const app = express();

const port = 8003;

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log("server is running on port : 8003");
})


