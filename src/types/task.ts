export interface Task {
  id: number
  name: string
  content: string
  isDone: boolean
}

export type TaskState = {
  selectedTask: Task | null
  selectTask: (id: number | null) => void
  tasks: Task[]
  createTask: () => void
  removeTask: (id: number) => void
  updateTask: (id: number, data: Partial<Task>) => void
}
