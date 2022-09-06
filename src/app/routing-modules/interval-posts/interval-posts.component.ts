import { Component, OnInit } from '@angular/core';
import { BlogContractService } from 'src/app/shared-services/blog-contract.service';
import { Post } from '../../shared-interfaces/post.interface';


@Component({
  selector: 'app-interval-posts',
  templateUrl: './interval-posts.component.html',
  styleUrls: ['./interval-posts.component.scss'],

})
export class IntervalPostsComponent implements OnInit {

  public monthlyPosts: Post[];

  constructor(
    public blogContractService: BlogContractService
  ) {
  }

  public ngOnInit(): void {
    const getPosts = this.blogContractService.getPosts('niaEQjYytHzUDqeicQ2nZTPwGT3j8qwELWVlwZbnAkU')
    getPosts().then(x => {
      this.monthlyPosts = x.result.sort((a, b) => (b.timestamp - a.timestamp));
    });

  }


}
