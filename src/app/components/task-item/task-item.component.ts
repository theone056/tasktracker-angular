import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteItem: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleItem: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete = (task: Task) => {
    this.deleteItem.emit();
  };

  onToggle(task: Task) {
    this.onToggleItem.emit();
  }
}
