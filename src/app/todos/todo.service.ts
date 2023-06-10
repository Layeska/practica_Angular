import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  postSource = new Subject();
  posts$ = this.postSource.asObservable();

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getById(postId: number) {
    const params = { postId }
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`, { params })
  }

  getPost() {
    const body = {
      id: 1,
      comment: 'hola',
      date: '2022-01-01'
    }

    return this.http.post('https://jsonplaceholder.typicode.com/posts', body)
  }

  
}
