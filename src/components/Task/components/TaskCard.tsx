import { FC, ReactNode, useRef } from "react"
import type { TaskCardProps } from "@Task/modules/modules"

const checkIsDone:FC<boolean> = (isDone: boolean, bgColor: object): ReactNode => {
    return (
        isDone ? <div className="i-carbon-checkmark" style={bgColor}></div> :  <div className="i-carbon-checkmark text-white"></div>
    )
}

export const TaskCard:FC<TaskCardProps> = ({taskItem, onDel, onDone, onTextChange}: TaskCardProps): ReactNode =>{
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const date: string[] = taskItem.createdTime.toDateString().split(' ')
    const taskDateString: string = `${date[1]} ${date[2]},${date[3]}`
    const bgColor = {
      backgroundColor: taskItem.cardColor
    }

    const handleFocus = (): void => {
      // console.log(textareaRef)
      textareaRef.current?.focus()
      textareaRef.current?.setSelectionRange(-1,-1)
    }

    return (
        <div className="taskCard w-60 h-60 rounded-4 flex items-center justify-center" style={bgColor}>
          <div className="cardContent w-90% h-85%">
            <textarea ref={textareaRef} className="input-primary w-full h-70% resize-none" value={taskItem.content} 
            onChange={(e)=>{onTextChange(e.target.value, taskItem.id)}}
            style={bgColor}
            />
            <div className="taskInteractionArea w-full h-30% mt-4 flex justify-around">
              <div className="taskTime text-sm text-dark flex items-center">
                {taskDateString}
              </div>
              <div className="btnArea h-full flex gap-2 items-center text-white text-sm">
                <div className="editBtn w-8 h-8 bg-black op-80 rounded-50% flex justify-center items-center"
                    onClick={() =>{ handleFocus()}}
                >
                  <div className="i-carbon-paint-brush-alt">
                  </div>
                </div>
                <div className="doneBtn w-8 h-8 bg-black op-80 rounded-50% flex justify-center items-center text-lg"
                    onClick={()=>{ onDone(taskItem.id) }}
                >
                  {checkIsDone(taskItem.isDone, bgColor)}
                </div>
                <div className="editBtn w-8 h-8 bg-black op-80 rounded-50% flex justify-center items-center"
                    onClick={()=>{ onDel(taskItem.id) }}
                >
                  <div className="i-carbon-trash-can">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}