import {Component, OnInit} from '@angular/core';
import {Post} from "../../shared-interfaces/post.interface";

@Component({
  selector: 'app-interval-posts',
  templateUrl: './interval-posts.component.html',
  styleUrls: ['./interval-posts.component.scss']
})
export class IntervalPostsComponent implements OnInit {

  public monthlyPosts: Post[];

  public ngOnInit(): void {
    this.getPostsArchive();
  }

  public getPostsArchive(): void {
    this.monthlyPosts = [
      {
        id: 4,
        title: 'abc akjsfn lksfn lksng ;lasm f;lasmf lksanf kjlsdbgfksjdf',
        creator: 'abc aksjfnkajsknas fkajsn fkjsan fksj',
        date: new Date(Date.now()),
        content: 'abc akjfs nskjlg ksndkg jnsdkjgb kjdnsg kjnsalkdgn kjlsdng kjnskdjg kjsng lkjnslkdg nlkdnsg ksajkdng lkjnsdgkj nskjng lkjsndg kjnsdkgjnskdnjg ',
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


}
