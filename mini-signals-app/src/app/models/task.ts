export type TaskStatus = 'todo' | 'done';

export interface Task {
  id: number;
  title: string;
  student: string;
  status: TaskStatus;
  createdAt: string;
}
