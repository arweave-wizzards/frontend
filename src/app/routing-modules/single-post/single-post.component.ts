import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../shared-interfaces/post.interface';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BlogContractService } from 'src/app/shared-services/blog-contract.service';

@Component({
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit, OnDestroy {

  public paramsSub: Subscription = new Subscription();
  public post: Post;

  constructor(
    private route: ActivatedRoute,
    public blogContractService: BlogContractService,
  ) {
  }

  public ngOnInit(): void {
    const getPosts = this.blogContractService.getPosts('niaEQjYytHzUDqeicQ2nZTPwGT3j8qwELWVlwZbnAkU');
    getPosts().then(x => {
      this.paramsSub.add(this.route.params.subscribe(params => {
        this.post = x.result.find(a => a.id == params.id);
      }));
    });
  }

  public ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

}
