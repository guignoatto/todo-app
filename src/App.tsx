import { useState } from "react"
import BackgroundHeading from "./components/BackgroundHeading"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ToDoList from "./components/ToDoList"
import TodoInterface from "./types/types"

function App() {

  const [todos, setTodos] = useState<TodoInterface[]>([])

  return (
    <div className=" flex justify-center flex-col items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />
      
      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header todos={todos} />

        <ToDoList todos={todos} setTodos={setTodos} />
 
        <Sidebar todos={todos} setTodos={setTodos} />
      </main>

      <Footer />
    </div>
  )

}

export default App
