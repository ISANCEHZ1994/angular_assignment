import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private URL = environment.api

  public id: number;

  constructor( private http: HttpClient) { }


  public getPosts(): Observable<any>{
    console.log('we are getting posts!')
    return this.http.get(this.URL)
  }

  public getComments(){
    
    // let params = new HttpParams().set('userId', id)
    // let commentId = `https://jsonplaceholder.typicode.com/posts/${this.id}/comments`

      console.log('we are getting comments!')
      return this.http.get(`${this.URL}?postId=${this.id}`); // ?userId=${this.userId}/comments
  }



}
