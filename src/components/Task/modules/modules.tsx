interface TaskModel{
    content: string
    createdTime: Date
    isDone: boolean
}

interface TaskProps{
    taskList : TaskModel[]
}

interface TaskCardProps{
    taskItem: TaskModel
}

export type { TaskModel, TaskProps, TaskCardProps}