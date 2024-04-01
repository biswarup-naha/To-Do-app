import axios from 'axios'

const baseUrl="http://localhost:3000"

const getAllTodo=(setTodo)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data --->',data);
        setTodo(data);
    })
}

const addTodo=(text,setText,setTodo)=>{
    axios
    .post(`${baseUrl}/save`, {text}) 
    .then((data) => {
        console.log(data);
        setText("")
        getAllTodo(setTodo);
    })
    .catch((err)=> console.log(err))
}

const updateTodo=(todoId,text,setText,setTodo,setisUpdating)=>{
    axios
    .put(`${baseUrl}/update`, {_id:todoId, text}) 
    .then((data) => {
        console.log(data);
        setText("")
        setisUpdating(false)
        getAllTodo(setTodo);
    })
    .catch((err)=> console.log(err))
}

const deleteTodo = (_id, setToDo) => {
axios
    .delete(`${baseUrl}/delete`, { data: { _id } })
    .then((data) => {
    console.log("Deleted successfully...");
    getAllTodo(setToDo)
    })
    .catch((error) => {
    console.error('Error deleting todo:', error);
    });
};

export {getAllTodo, addTodo,updateTodo, deleteTodo}