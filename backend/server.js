const express=require('express');
const app=express();
const mongoose=require("mongoose");
const routes=require('./routes/todo.routes')
const cors=require('cors')

require('dotenv').config();

const PORT=process.env.PORT || 5000;

app.use(express.json());
//to allow cross-origin resource sharing 
app.use(cors())

const url="mongodb://localhost:27017/todoApp"

mongoose.connect(url)
.then(()=>console.log("connected to MongoDB..."))
.catch((err)=>console.log(err))

app.use(routes); 

app.listen(PORT,()=>{
    console.log(`server is live at ${PORT}`);
})
