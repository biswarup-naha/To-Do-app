import Todo from "./components/Todo"


function App() {

  return (
    <div className="App">
      
    <div className="max-w-2xl m-auto py-0 px-1">
      <h1 className="text-6xl font-bold text-center mt-4">To Do App</h1>
      <div className="flex justify-center items-center mt-8 gap-4">
        <input type="text" className="w-96 py-0 px-2 border-solid border-slate-500 border-b outline-0" placeholder='Enter your to do here...' />
        <div className=' bg-black text-white py-1 px-5 cursor-pointer'>Add Task</div>
      </div>

      <div className="list">
          <Todo text="reading"/>
          <Todo text="buy fruits"/>
          <Todo text="cycling"/>
          <Todo text="coding"/>
      </div>
    </div>

    </div>
  )
}

export default App
