import { FC, ReactNode } from "react"
import type { TaskModel, TaskProps } from "./modules/modules"
import { TaskCard } from "./components/TaskCard"

const Task: FC<TaskProps>= ({taskList, setTaskList}:TaskProps): ReactNode => {
    
    /**
     * @description 根据taskId删除task
     * @param taskId 
     */
    const handleDelTask = (taskId: number): void => {
        setTaskList(taskList.filter((task: TaskModel): boolean => task.id !== taskId))
    }

    /**
     * @description 根据taskId修改task的isDone状态
     * @param taskId 
     */
    const handleDoneTask = (taskId: number): void => {
        const taskIndex = taskList.findIndex((task: TaskModel): boolean => task.id === taskId)
        setTaskList(taskList.map((taskItem: TaskModel, index: number): TaskModel => {
            if(index === taskIndex){
                return { ...taskItem, isDone: !taskItem.isDone}
            }
            return taskItem
        }))
    }

    /**
     * @description textarea每次change把newText修改为对应taskId的task的content
     * @param newText 
     * @param taskId 
     */
    const handleTextChange = (newText:string, taskId:number): void => {
        const taskIndex = taskList.findIndex((task: TaskModel): boolean => task.id === taskId)
        setTaskList(taskList.map((taskItem: TaskModel, index: number): TaskModel => {
            if(index === taskIndex){
                return {...taskItem, content: newText}
            }
            return taskItem
        }))
    }

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