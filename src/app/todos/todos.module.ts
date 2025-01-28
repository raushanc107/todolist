import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoitemComponent} from './todoitem/todoitem.component';
import {TodolistComponent} from './todolist/todolist.component';
import {TodoserviceService} from './services/todoservice.service';

@NgModule({
  declarations: [TodoitemComponent,TodolistComponent],
  imports: [
    CommonModule
  ],
  exports:[TodolistComponent],
  providers:[TodoserviceService]
})
export class TodosModule { }
