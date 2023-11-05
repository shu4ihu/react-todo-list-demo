import { ReactNode, useState } from "react"
import Tabbar from "@Tabbar/Tabbar"
import Task from "@Task/Task"
import SearchBar from "@/components/SearchBar/SearchBar"
import type { TaskModel } from "@Task/modules/modules"

function App(): ReactNode {
  // 预设数据
    const [taskList, setTaskList] = useState<TaskModel[]>([
        {
            id:0,
            content: "Note 1",
            createdTime: new Date("2023-10-26"),
            cardColor: "#f7d289",
            isDone: false
        },
        {
            id:1,
            content: "Note 2",
            createdTime: new Date("2023-10-26"),
            cardColor: "#f2aa85",
            isDone: false
        },
        {
            id:2,
            content: "Note 3",
            createdTime: new Date("2023-10-26"),
            cardColor: "#b99ff7",
            isDone: false
        },
        {
            id:3,
            content: "Note 4",
            createdTime: new Date("2023-10-26"),
            cardColor: "#63d6fa",
            isDone: true
        },
        {
            id:4,
            content: "Note 5",
            createdTime: new Date("2023-10-26"),
            cardColor: "#e9f1a4",
            isDone: false
        },
        {
            id:5,
            content: "Note 6",
            createdTime: new Date("2023-10-26"),
            cardColor: "#f2aa85",
            isDone: false
        },
        {
            id:6,
            content: "Note 7",
            createdTime: new Date("2023-10-26"),
            cardColor: "#b99ff7",
            isDone: false
        },
        {
            id:7,
            content: "Note 8",
            createdTime: new Date("2023-10-26"),
            cardColor: "#63d6fa",
            isDone: true
        }
    ])
    const [searchTaskList, setSearchTaskList] = useState<TaskModel[]>(taskList)

    /**
     * @description 根据输入的内容进行搜索,并更新搜索结果
     * @param inputValue 
     */
    const handleSearch = (inputValue: string) => {
      if(inputValue === '') {
        setSearchTaskList(taskList)
      }else{
        const newTaskList = taskList.filter((item) => {
          return item.content.includes(inputValue)
        })
        setSearchTaskList(newTaskList)
      }
    }

  return (
    <>
      <div className="w-100vw h-100vh md:flex">
        <Tabbar taskList={taskList} setTaskList={setTaskList} setSearchTaskList={setSearchTaskList}/>
        <div className='md:w-84vw h-full md:pl-8 flex flex-col md:items-baseline'>
            <SearchBar onSearch={handleSearch}></SearchBar>
            <div className="w-full md:pl-0 pl-8vw">
              <div className="text-6xl font-600">Notes</div>
            </div>
            <div className="taskArea w-full pt-6vh md:pl-0 pl-8vw">
              <Task taskList={searchTaskList} setTaskList={setSearchTaskList}></Task>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
