import { Injectable } from '@angular/core';

export interface Todo{
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private todolist:Todo[]=[];
  List():Todo[]{
    return this.todolist;
  }
  Add(title:string):void{
    const newTodo:Todo={
      id: this.todolist.length+1,
      title:title,
      completed:false
    };
    this.todolist.push(newTodo);
  }
  delete(id:number){
    this.todolist=this.todolist.filter(todo=>todo.id!=id);
  }
  update(title:string,id:number){
    const index=this.todolist.findIndex(todo=>todo.id==id);
    if(index>=0){
      this.todolist[index].title=title;
    }
  }
  markcompleted(id:number){
    const index=this.todolist.findIndex(todo=>todo.id==id);
    if(index>=0){
      this.todolist[index].completed=!this.todolist[index].completed;
    }
  }

}
