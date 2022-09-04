import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BlogContractService } from 'src/app/shared-services/blog-contract.service';
import { Post } from "../../shared-interfaces/post.interface";
import userWallet from '../../../../../dominik-wallet.json';
import { async } from '@angular/core/testing';
import { BehaviorSubject, delay, Observable, of, Subscribable, Subscription } from 'rxjs';
import { WalletConnectService } from 'src/app/shared-services/wallet-connect.service';


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
        this.monthlyPosts = [x.result];
      })
    }, 1000);

  }



}



