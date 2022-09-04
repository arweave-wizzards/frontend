import { Component, OnInit, } from '@angular/core';
import { BlogContractService } from 'src/app/shared-services/blog-contract.service';
import { Post } from "../../shared-interfaces/post.interface";



@Component({
  selector: 'app-interval-posts',
  templateUrl: './interval-posts.component.html',
  styleUrls: ['./interval-posts.component.scss'],

})
export class IntervalPostsComponent implements OnInit {



  public blogContractService: BlogContractService;

  constructor(
  ){
    this.blogContractService = new BlogContractService('use_wallet')
  }

  public monthlyPosts: Post[];;

  public ngOnInit() {
    let zmienna = this.blogContractService.getPosts('niaEQjYytHzUDqeicQ2nZTPwGT3j8qwELWVlwZbnAkU');
    setTimeout(() => {
      zmienna().then(x => {
        this.monthlyPosts = x.result.sort((a,b)=>(b.timestamp - a.timestamp));
      })
    }, 1000);

  }



}



