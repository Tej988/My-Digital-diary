const express = require('express');
const app = express();
const cors = require("cors")
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

// connect mongoose 
mongoose.connect("mongodb+srv://Blogapp:6YzUwnPn5UoKJcjm@cluster0.tgxd7.mongodb.net/Blog?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected successfully")})
    .catch(
        (error)=>{console.log(error)})

  app.use("/",require('./routes/noteRoute'))      
app.listen(2000,function(){
    console.log(`server is running at 2000`);
})
