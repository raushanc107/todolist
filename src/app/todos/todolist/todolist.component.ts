import { Component } from '@angular/core';
import {Todo,TodoserviceService} from '../services/todoservice.service';
@Component({
  selector: 'app-todolist',
  standalone:false,
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  todolist:Todo[]=[];
  constructor(private todolistservice:TodoserviceService){
    this.todolist=todolistservice.List();
  }

  Addtodo(title:string){
    this.todolistservice.Add(title);
  }

  markcompleted(id:number){
    this.todolistservice.markcompleted(id);
  }

  delete(id:number){
    this.todolistservice.delete(id);
    this.todolist=this.todolistservice.List();
  }

}
