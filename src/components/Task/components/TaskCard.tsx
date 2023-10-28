import { FC } from "react"
import type { TaskCardProps } from "../modules/modules"

const checkIsDone:FC<boolean> = (isDone:boolean) => {
    return (
        isDone ? <div className="i-carbon-checkmark text-fuchsia text-xl"></div> :  <div className="i-carbon-checkmark text-white text-xl"></div>
    )
}

export const TaskCard:FC<TaskCardProps> = ({taskItem}:TaskCardProps) =>{
    const date = taskItem.createdTime.toDateString().split(' ')
    const taskDateString = `${date[1]} ${date[2]},${date[3]}`
    return (
        <div className="taskCard w-60 h-60 bg-blue-2 rounded-4 flex items-center justify-center">
                  <div className="cardContent w-90% h-85%">
                    <div className="taskContent w-full% h-70% text-lg text-y-truncate">
                      {taskItem.content}
                    </div>
                    <div className="taskInteractionArea w-full h-30% mt-4 flex justify-around">
                      <div className="taskTime text-sm text-dark flex items-center">
                        {taskDateString}
                      </div>
                      <div className="btnArea h-full flex gap-2 items-center">
                        <div className="editBtn w-10 h-10 bg-black op-80 rounded-50% flex justify-center items-center">
                          <div className="i-carbon-paint-brush-alt text-white text-xl">
                          </div>
                        </div>
                        <div className="doneBtn w-10 h-10 bg-black op-80 rounded-50% flex justify-center items-center">
                          {checkIsDone(taskItem.isDone)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    )
}