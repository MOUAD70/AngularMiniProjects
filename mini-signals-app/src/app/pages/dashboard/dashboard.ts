import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { TaskForm } from '../../components/task-form/task-form';
import { TaskList } from '../../components/task-list/task-list';
import { TaskStats } from '../../components/task-stats/task-stats';
import { Task } from '../../models/task';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TaskForm, TaskList, TaskStats],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  tasks = signal<Task[]>([
    {
      id: 1,
      title: 'Revise Angular signals',
      student: 'Mouad',
      status: 'todo',
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Practice @Input/@Output',
      student: 'Mouad',
      status: 'done',
      createdAt: new Date().toISOString(),
    },
  ]);

  filterText = signal('');
  statusFilter = signal<'all' | 'todo' | 'done'>('all');

  filteredTasks = computed(() => {
    const q = this.filterText().toLowerCase().trim();
    const st = this.statusFilter();
    return this.tasks().filter((task) => {
      const matchesText =
        !q || task.title.toLowerCase().includes(q) || task.student.toLowerCase().includes(q);
      const matchesStatus = st === 'all' || task.status === st;
      return matchesText && matchesStatus;
    });
  });

  constructor() {
    const saved = localStorage.getItem('tasks');
    if (saved) this.tasks.set(JSON.parse(saved));

    effect(() => {
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    });
  }

  addTask(payload: { title: string; student: string }) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: payload.title,
      student: payload.student,
      status: 'todo',
      createdAt: new Date().toISOString(),
    };

    this.tasks.update((e) => [...e, newTask]);
  }

  toggleDone(taskId: number) {
    this.tasks.update((list) =>
      list.map((task) =>
        task.id === taskId ? { ...task, status: task.status === 'todo' ? 'done' : 'todo' } : task
      )
    );
  }

  deleteTask(taskId: number) {
    this.tasks.update((list) => list.filter((task) => task.id !== taskId));
  }
}
