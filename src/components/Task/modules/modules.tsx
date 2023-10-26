interface TaskModel{
    content: string
    createdTime: Date
    isDone: boolean
}

interface TaskProps{
    taskList : TaskModel[]
}

export type { TaskModel, TaskProps}