import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  _httpClient = inject(HttpClient)
  constructor() { }

  getPosts(): Observable<Post[]> {
    return this._httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(map(users => (
        users.map(user => ({
          title: user.title,
          body: user.body
        }))
      )))

  }
}
// get ===> Observable<Object>

// fn ===> Post[]


// {title, desc, id } : Post ==> {title , desc}


// [].map(ele =>ele)
