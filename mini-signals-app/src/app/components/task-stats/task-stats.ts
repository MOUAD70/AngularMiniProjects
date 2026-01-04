import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-stats',
  imports: [CommonModule],
  templateUrl: './task-stats.html',
  styleUrl: './task-stats.css',
})
export class TaskStats {
  @Input() tasks: Task[] = [];

  filterTodo() {
    return this.tasks.filter((task) => task.status === 'todo').length;
  }

  filterDone() {
    return this.tasks.filter((task) => task.status === 'done').length;
  }
}
