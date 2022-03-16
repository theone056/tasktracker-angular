import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  Tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((task) => (this.Tasks = task));
  }

  onDelete = (task: Task) => {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.Tasks = this.Tasks.filter((c) => c.id !== task.id))
      );
  };

  onToggleReminder(task: Task) {
    task.reminder = !task.reminder;
  }
}
