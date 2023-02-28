import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: 
  {
    id: number, 
    work: string, 
    isCompleted: 
    boolean, 
    createdDate: Date
  }[] = [];

  add(event: any){
    let model = {
      id: Math.floor(Math.random() * 10),
      work: event,
      isCompleted: false,
      createdDate: new Date()
    }
    this.todos.push(model);    
  }

  completedEvent(event: any){
    this.todos[event].isCompleted = !this.todos[event].isCompleted;    
  }

  delete(event: any){
    let index = this.todos.findIndex(p=> p.id == event);
    this.todos.splice(index,1);
  }
}
