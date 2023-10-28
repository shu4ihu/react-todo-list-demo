import Tabbar from "./components/Tabbar/Tabbar"
import Task from "./components/Task/Task"
import SearchBar from "./components/SearchBar/SearchBar"
import { useState } from "react"

function App() {
  const [taskList, setTaskList] = useState([
        {
            content: "remember code",
            createdTime: new Date("2023-10-26"),
            isDone: false
        },
        {
            content: "remember code",
            createdTime: new Date("2023-10-26"),
            isDone: false
        },
        {
            content: "remember code",
            createdTime: new Date("2023-10-26"),
            isDone: false
        },
        {
            content: "remember code",
            createdTime: new Date("2023-10-26"),
            isDone: true
        }
    ])

  const a = ()=>{
    setTaskList([])
  }

  return (
    <>
      <div className="w-100vw h-100vh flex">
        <Tabbar />
        <div className='w-84vw h-full pl-8'>
            <SearchBar></SearchBar>
            <div className="w-full">
              <div className="text-6xl font-600">Notes</div>
            </div>
            <div className="taskArea w-full pt-14">
              <Task taskList={taskList}></Task>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
