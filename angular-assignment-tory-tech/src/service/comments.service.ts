import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  private commentsURL = environment.apiComments

  public id: number;

  constructor(private http: HttpClient) { }

  public getComments(){

    // let commentId = `https://jsonplaceholder.typicode.com/posts/${this.id}/comments`

      console.log('we are getting comments!')
      return this.http.get(`${this.commentsURL}?userId=${this.id}`); // ?userId=${this.userId}/comments
  }

}
