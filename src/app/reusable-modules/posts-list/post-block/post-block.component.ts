import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../shared-interfaces/post.interface";

@Component({
  selector: 'app-post-block',
  templateUrl: './post-block.component.html',
  styleUrls: ['./post-block.component.scss']
})
export class PostBlockComponent implements OnInit {

  @Input() public postData: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
