import { Component } from '@angular/core';
import { BackendService } from './services/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.getTodos()
  }

  todos: any[] = []

  description: any

  getTodos(){
    this.backendService.getTodos().subscribe(
      {
        next: (data) => {
          this.todos = data
          this.todos = this.todos.filter(todo => todo.status === 1)
      }
    }
    )
  }

  saveTodo(){
    console.log(this.description)
    this.backendService.saveTodo({description: this.description}).subscribe(
      {
        next: (data) => {
          this.getTodos()
          this.description = ''
        }
      }
    )
  }

}