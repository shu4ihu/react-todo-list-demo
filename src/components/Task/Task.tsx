import { FC, ReactNode } from "react"
import type { TaskModel, TaskProps } from "./modules/modules"

const Task: FC<TaskProps>= ({ taskList }: TaskProps) => {
    const showTaskList = () : ReactNode  => {
        return taskList.map((task: TaskModel) => {
            return (
                <div key={task.createdTime.toString()}>
                    <div>{`${task.content}-${task.createdTime}`}</div>
                </div>
            )
        })
    }
    return (
        <div>
            {showTaskList()}
        </div>
    )
}

export default Task