import { FC, ReactNode } from "react"
import type { TaskModel, TaskProps } from "./modules/modules"
import { TaskCard } from "./components/TaskCard"

const Task: FC<TaskProps>= ({ taskList }: TaskProps) => {
    const showTaskList = () : ReactNode  => {
        return taskList.map((task: TaskModel, index:number) => {
            return (
                <div key={index}>
                    <TaskCard taskItem={task}></TaskCard>
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