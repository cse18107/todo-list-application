const mongoose = require('mongoose');

const DB="mongodb+srv://cse18107:cse18107@cluster0.4delu.mongodb.net/task_manager?retryWrites=true&w=majority";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("DB connected successfully")})
.catch((error)=>{
    console.log(error.message);
})