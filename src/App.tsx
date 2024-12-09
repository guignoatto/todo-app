import { useState } from "react"
import BackgroundHeading from "./components/BackgroundHeading"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import ToDoList from "./components/ToDoList"

function App() {
  const [tasks, setTasks] = useState<string[]>([])

  function addTask(task:string){
    if (task.trim() === "") return
    setTasks((prevTasks) => [...prevTasks, task])
  }

  return (
    <div className=" flex justify-center flex-col items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />
      
      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />

        <ToDoList tasks={tasks} />
 
        <Sidebar handleSendToList={addTask} />
      </main>

      <Footer />
    </div>
  )

}

export default App
