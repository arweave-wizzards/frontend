import {Component, OnInit} from '@angular/core';
import {PostsInMonth} from "./posts-in-month.interface";

@Component({
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit{
  public postsInMonths: PostsInMonth[];

  public ngOnInit(): void {
    this.getPostsArchive();
  }

  public getPostsArchive(): void{
    this.postsInMonths =  [
      {
        month: "Aug, 2022",
        posts: [
          {
            id: 4,
            title: 'abc',
            creator: 'abc',
            date: new Date(Date.now()),
            content: 'abc',
            tags: ['abc', 'acb'],
            votes: {
              status: 0,
              addresses: [],
            }
          },
          {
            id: 4,
            title: 'abc',
            creator: 'abc',
            date: new Date(Date.now()),
            content: 'abc',
            tags: ['abc', 'acb'],
            votes: {
              status: 0,
              addresses: [],
            }
          }
        ]
      },
      {
        month: "Jul, 2022",
        posts: [
          {
            id: 4,
            title: 'abc',
            creator: 'abc',
            date: new Date(Date.now()),
            content: 'abc',
            tags: ['abc', 'acb'],
            votes: {
              status: 0,
              addresses: [],
            }
          },
          {
            id: 4,
            title: 'abc',
            creator: 'abc',
            date: new Date(Date.now()),
            content: 'abc',
            tags: ['abc', 'acb'],
            votes: {
              status: 0,
              addresses: [],
            }
          }
        ]
      }

    ];
  }
}
