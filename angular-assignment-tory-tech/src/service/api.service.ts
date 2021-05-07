import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  private URL = environment.api // <= this is https://jsonplaceholder.typicode.com/posts

  public id: number; // wanted to make a reference to the id already how ever I dont know if I can even get 
  // information from here.

  constructor( private http: HttpClient) { }

  public getPosts(): Observable<any>{
    console.log('we are getting posts!')
    return this.http.get(this.URL)
  }

  public getComments(){
      console.log('we are getting comments!')
      return this.http.get(`${this.URL}?postId=${this.id}`); // ?userId=${this.userId}/comments
  }



}
