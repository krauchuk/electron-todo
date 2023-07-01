export interface Task {
  id: number
  name: string
  content: string
}

export type TaskContext = {
  selectedTask: Task | null
  selectTask: (id: number | null) => void
  tasks: Task[]
  addTask: (task: Task) => void
  removeTask: (id: number) => void
  renameTask: (id: number, name: string) => void
  updateTaskContent: (id: number, content: string) => void
}
