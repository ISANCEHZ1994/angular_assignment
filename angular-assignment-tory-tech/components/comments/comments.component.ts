import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() public parentData; 
  // @Input(''parentData') public: name // now check comments.html - use 'name' to reference the parentData that is pass thru
  @Input() showMe: boolean;

  // @Input() userId: [];
  comments: any;

  // public userId: number;

  constructor( private commentService: CommentsService ) { }

  ngOnInit(): void {
    // this.userId = this.userId;
    this.comments = this.commentService.getComments();
  }
  

}
