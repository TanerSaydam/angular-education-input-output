import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() newTodos: {
    id: number, 
    work: string, 
    isCompleted: 
    boolean, 
    createdDate: Date
  }[] = [];

  @Output() completedEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();

  completeTodo(index: number){
    this.completedEvent.emit(index);
  }

  delete(id: number){
    this.deleteEvent.emit(id);
  }
}
