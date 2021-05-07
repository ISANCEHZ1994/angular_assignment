import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Comment } from '../interface/comment' 
import { Observable } from 'rxjs';


/**
 * 
 * NOTE: created api.service to do both the work of comments.service and posts.service!
 * 
 */

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  private commentsURL = environment.apiComments

  public id: number;

  constructor(private http: HttpClient) {
    
   }

  public getComments(){
    
    // let params = new HttpParams().set('userId', id)
    // let commentId = `https://jsonplaceholder.typicode.com/posts/${this.id}/comments`

      console.log('we are getting comments!')
      return this.http.get(`${this.commentsURL}?postId=${this.id}`); // ?userId=${this.userId}/comments
  }

}
