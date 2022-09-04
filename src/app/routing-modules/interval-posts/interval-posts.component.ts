import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BlogContractService } from 'src/app/shared-services/blog-contract.service';
import { Post } from "../../shared-interfaces/post.interface";
import userWallet from '../../../../../dominik-wallet.json';
import { async } from '@angular/core/testing';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-interval-posts',
  templateUrl: './interval-posts.component.html',
  styleUrls: ['./interval-posts.component.scss']
})
export class IntervalPostsComponent implements OnInit {


  public blogContractService: BlogContractService = new BlogContractService(userWallet);

  constructor() { }

  public monthlyPosts: Observable<Post[]>;

  public ngOnInit() {
    let zmienna = this.blogContractService.getPostsByAuthor('niaEQjYytHzUDqeicQ2nZTPwGT3j8qwELWVlwZbnAkU');

    setTimeout(function () {
      console.log("CHUJE MUJE")
      zmienna().then(x => {
        this.monthlyPosts = of([x.result]);
      })



    }, 1000);


  }


}
