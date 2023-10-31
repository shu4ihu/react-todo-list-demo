import { TaskModel } from "../../Task/modules/modules"

interface TabbarColorListProps {
    colorList: string[]
    onAddTask: (index: number) => void 
}

interface TabbarProps{
    taskList: TaskModel[]
    setTaskList: (taskList: TaskModel[]) => void
}

export type { TabbarColorListProps, TabbarProps }