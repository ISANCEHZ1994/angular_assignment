import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentsURL = environment.apiComments

  constructor(private http: HttpClient) { }

  public getComments(){

      console.log('we are getting comments!')
      return this.http.get(`${this.commentsURL}`); // ?userId=${this.userId}/comments
  }

}
