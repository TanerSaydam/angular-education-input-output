import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoAddComponent } from './components/todos/todo-add/todo-add.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './common/components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoAddComponent,
    TodoListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
