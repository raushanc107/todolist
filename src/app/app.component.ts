import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosModule } from './todos/todos.module';
@Component({
  selector: 'app-root',
  imports: [TodosModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist';
}
