import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

  todos: any = []

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((res: any) => {
      console.log(res)
      this.todos = res
    })

    this.todoService.getById(5).subscribe(res => console.log("comments: ", res))

    this.todoService.getPost().subscribe(res => console.log("Res del Post: ", res))

    this.todoService.posts$.subscribe(res => {
      console.log("Post$: ", res)
    })
  }

  updatePost() {
    this.todoService.postSource.next('información!!!')
  }
}
