import { Component, Input } from '@angular/core';
import { Todo,TodoserviceService} from '../services/todoservice.service';

@Component({
  selector: 'app-todoitem',
  standalone:false,
  templateUrl: './todoitem.component.html',
  styleUrl: './todoitem.component.css'
})
export class TodoitemComponent {
  @Input() todo!:Todo;
  constructor(private service:TodoserviceService){

  }

  

  markcompleted(id:number){
    this.service.markcompleted(id);
  }

  delete(id:number){
    this.service.delete(id);
  }

}
