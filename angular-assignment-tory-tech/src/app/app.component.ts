import { Component, OnInit } from '@angular/core';
// import { PostsService } from 'src/service/posts.service';
// import { CommentsService } from 'src/service/comments.service'
import { Post } from 'src/interface/post'
import { Comment } from 'src/interface/comment'
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  public posts: Post[]; 
  postSelected: number; // wanted to get the specifc id here and see if I can pass it to where I needed it

  public comments:  Comment[];
  
  public show: boolean = false;
  public id: number;

  constructor(private apiService: ApiService){
    
  };

  ngOnInit(){
    this.getPosts();
    this.getComments();
  };

  public getPosts(): void{
    this.apiService.getPosts().subscribe(
      ( response: Post[]) => { // want a pop-up to show if function is not working
        this.posts = response;
      },
      ( error: HttpErrorResponse ) => {
        alert(error.message);
      }
    );
  };

  public getComments(){
    this.apiService.getComments().subscribe(
      ( response: Comment[]) => {
        this.comments = response;
      },
      ( error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  };

  public toggleChild(){
    this.show = !this.show;
  }

  // public clickForId(id:number){
  //   this.id = id;
  //   console.log(id)
  // }

}


