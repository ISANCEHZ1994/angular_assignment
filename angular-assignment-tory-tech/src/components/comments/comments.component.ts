import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  // @Input() public parentData; 
  // @Input(''parentData') public: name // now check comments.html 
  // use 'name' to reference the parentData that is pass thru

  @Input() showMe: boolean;

  @Input() showComment: number;

  comments: any;

  constructor( private commentService: CommentsService ) { }

  ngOnInit(): void {
    this.comments = this.commentService.getComments();
  }
  

}
