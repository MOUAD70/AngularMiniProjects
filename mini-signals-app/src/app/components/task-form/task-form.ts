import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  title = '';
  student = '';

  @Output() create = new EventEmitter<{ title: string; student: string }>();

  submit() {
    const t = this.title.trim();
    const s = this.student.trim();

    if (!t || !s) return;

    this.create.emit({ title: t, student: s });

    this.title = '';
    this.student = '';
  }
}
