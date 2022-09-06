import {Component, OnInit} from '@angular/core';
import {PostsInMonth} from "./posts-in-month.interface";

@Component({
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit{
  public postsInMonths: PostsInMonth[];

  public ngOnInit(): void {

  }
}
