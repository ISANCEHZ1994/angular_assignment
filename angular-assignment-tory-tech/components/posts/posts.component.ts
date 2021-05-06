import { Component, OnInit } from '@angular/core';
import { PostsService } from 'service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // posts = ['a post here', 'another post right over here', 'and post here!']

  // public name = 'this is the post ID';

  public show: boolean = false;

  posts: any;
  
  constructor( private postService: PostsService ) { 

  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  public toggleChild(){
    this.show = !this.show;
  }

}
