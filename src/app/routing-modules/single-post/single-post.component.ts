import { Component, OnInit } from '@angular/core';
import {Post} from "../../shared-interfaces/post.interface";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  public paramsSub: Subscription;
  public post: Post;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe(params => {
      this.post = this.getPostById(params.id);
    });
  }

  public getPostById(id: number): Post{
    return  {
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
    };
  }

  public ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

}
