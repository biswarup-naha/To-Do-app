import { useEffect, useState } from "react";
import Todo from "./components/Todo"
import { addTodo, getAllTodo, updateTodo, deleteTodo } from "./utils/HandleAPI";


function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId,setTodoId]= useState("")  
  const [theme, setTheme] = useState(null);

  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme("dark");
    }
    else{
      setTheme("light")
    }
  },[])

  useEffect(()=>{
    if(theme==="dark"){ 
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[theme])

  const handleThemeSwitch=()=>{
    setTheme(theme==="dark"?"light":"dark")
  }

  useEffect(()=>{
    getAllTodo(setTodo)
  },[])

  const updateMode=(_id,text)=>{
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className="App">
      
    <div className=" h-screen max-w-2xl m-auto py-0 px-1">
      <h1 className="text-6xl font-bold text-center mt-4">To Do App</h1>
      <div className="flex justify-center items-center mt-8 gap-4">
        <input 
        type="text" 
        className="w-96 py-0 px-2 border-solid border-slate-500 border-b outline-0" 
        placeholder='Enter your to do here...'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />
        <div className=' bg-black text-white py-1 px-5 cursor-pointer' onClick={isUpdating ? ()=>updateTodo(todoId,text,setText,setTodo,setIsUpdating) : ()=> addTodo(text,setText,setTodo)}>
            {isUpdating ? "Update" : "Add Task"}
          </div>
      </div>

      <div className="list">

          {todo.map( (item)=> <Todo key={item._id} text={item.text} updateMode={()=> updateMode(item._id,item.text)} deleteTodo={()=> deleteTodo(item._id,setTodo)} /> )}

          {/* <Todo text="reading"/>
          <Todo text="buy fruits"/>
          <Todo text="cycling"/>
          <Todo text="coding"/> */}
      </div>

    </div>

    </div>
  )
}

export default App
