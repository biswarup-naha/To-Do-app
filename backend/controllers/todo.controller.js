const todoModel=require('../models/todo.model')

module.exports.getTodo=async (req,res)=>{
    const todo=await todoModel.find()
    res.send(todo)
}

module.exports.saveTodo=async (req,res)=>{
    const {text}=req.body;
    todoModel
    .create({text})
    .then((data)=>{
        console.log("data added successfully...")
        res.send(data)
    })
    .catch((err)=>console.log(err))
}

module.exports.updateTodo=async (req,res)=>{
    const {_id,text}=req.body;
    
    todoModel.findByIdAndUpdate(_id,{text})
    .then(()=>{res.send("Updated successfully!!")})
    .catch((err)=>console.log(err))

}

module.exports.deleteTodo=async  (req,res)=>{
    const {_id}=req.body;

    todoModel.findByIdAndDelete(_id)
    .then(()=>res.send("Deleted Successfully"))
    .catch((err)=>console.log(err))
}