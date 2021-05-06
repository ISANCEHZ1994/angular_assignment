import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/service/posts.service';
import { Post } from 'src/interface/post'
import { CommentsService } from 'src/service/comments.service'
import { Comment } from 'src/interface/comment'
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  public posts: Post[]; 
  public comments: Comment[];

  postSelected: number;

  // comments: Observable<any>;

  public show: boolean = false;

  public id: number;

  constructor(private postsService: PostsService, private commentsService: CommentsService){
    
  };

  ngOnInit(){
    this.getPosts();
    this.getComments();
  };

  public getPosts(): void{
    this.postsService.getPosts().subscribe(
      ( response: Post[]) => {
        this.posts = response;
      },
      ( error: HttpErrorResponse ) => {
        alert(error.message);
      }
    );
  };

  public getComments(){
    this.commentsService.getComments().subscribe(
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

  public clickForId(id:number){
    this.id = id;
    console.log(id)
  }

}


