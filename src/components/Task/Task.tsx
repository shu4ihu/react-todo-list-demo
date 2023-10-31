import { FC, ReactNode } from "react"
import type { TaskModel, TaskProps } from "./modules/modules"
import { TaskCard } from "./components/TaskCard"

const Task: FC<TaskProps>= ({taskList, setTaskList}:TaskProps): ReactNode => {
    
    // 删除 task
    const handleDelTask = (taskId: number): void => {
        setTaskList(taskList.filter((task: TaskModel): boolean => task.id !== taskId))
    }

    // 完成 task
    const handleDoneTask = (taskId: number): void => {
        const taskIndex = taskList.findIndex((task: TaskModel): boolean => task.id === taskId)
        setTaskList(taskList.map((taskItem: TaskModel, index: number): TaskModel => {
            if(index === taskIndex){
                return { ...taskItem, isDone: !taskItem.isDone}
            }
            return taskItem
        }))
    }

    // 修改 task
    const handleTextChange = (newText:string, taskId:number): void => {
        const taskIndex = taskList.findIndex((task: TaskModel): boolean => task.id === taskId)
        setTaskList(taskList.map((taskItem: TaskModel, index: number): TaskModel => {
            if(index === taskIndex){
                return {...taskItem, content: newText}
            }
            return taskItem
        }))
    }

    // 展示 task
    const showTaskList = () : ReactNode  => {
        return taskList.map((task: TaskModel, index:number) => {
            return (
                <div key={index}>
                    <TaskCard taskItem={task} onDel={handleDelTask} onDone={handleDoneTask} onTextChange={handleTextChange}></TaskCard>
                </div>
            )
        })
    }
    return (
        <div className="flex flex-wrap gap-4">
            {showTaskList()}
        </div>
    )
}

export default Task