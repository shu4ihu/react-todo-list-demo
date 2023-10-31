interface TaskModel{
    id: number
    content: string
    createdTime: Date
    cardColor: string
    isDone: boolean
}

interface TaskProps{
    taskList: TaskModel[]
    setTaskList: (taskList: TaskModel[]) => void
}

interface TaskCardProps{
    taskItem: TaskModel
    onDel: (taskId: number) => void
    onDone: (taskId: number) => void
    onTextChange: (newText: string, taskId: number) => void
}

export type { TaskModel, TaskProps, TaskCardProps}