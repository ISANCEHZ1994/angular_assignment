import { Component, OnInit } from '@angular/core';
import { PostsService } from 'service/posts.service';
import { Post } from 'interface/post'
import { Comment } from 'interface/comment'
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // title = 'angular-assignment-tory-tech';
  public posts: Post[];

  public listComments: Comment[];

  constructor(private postsService: PostsService){
    
  };

  ngOnInit(){
    // return this.postsService.getPosts()
    // .subscribe(data => this.posts = data);
    this.getPosts();
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


}


