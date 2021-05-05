import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = ['a post here', 'another post right over here', 'and post here!']

  constructor() { }

  ngOnInit(): void {

  }

}
