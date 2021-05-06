import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentsURL = environment.api

  public userId: number;

  listComments: Comment[];

  constructor(private http: HttpClient) { }

  public getComments(): Observable<any>{

    // this.userId = this.http.get(this.commentsURL).map( post => post.id)

    // let params1 = new HttpParams().set('userId', '1')

      console.log('we are getting comments!')
      return this.http.get(`${this.commentsURL}`); // ?userId=${this.userId}/comments
  }

}
