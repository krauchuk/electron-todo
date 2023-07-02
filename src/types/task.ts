export interface Task {
  id: number
  name: string
  content: string
  isDone: boolean
}

export type TaskContext = {
  selectedTask: Task | null
  selectTask: (id: number | null) => void
  tasks: Task[]
  addTask: () => void
  removeTask: (id: number) => void
  updateTask: (id: number, data: Partial<Task>) => void
}
