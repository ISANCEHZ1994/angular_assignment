import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from 'interface/post'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

    // private postsURL = 'https://jsonplaceholder.typicode.com/posts'
    private postsURL = environment.apiPosts

  constructor(private http: HttpClient) { 

  };

  public getPosts() {
      console.log('we are getting this information!')
      return this.http.get(this.postsURL);

  }
  


}
