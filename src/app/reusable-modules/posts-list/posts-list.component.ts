import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../shared-interfaces/post.interface";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  @Input() public postsDataList: Post[];
  constructor() { }

  ngOnInit(): void {
  }

}
