import {Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Post} from "../../../shared-interfaces/post.interface";

@Component({
  selector: 'app-post-block',
  templateUrl: './post-block.component.html',
  styleUrls: ['./post-block.component.scss']
})
export class PostBlockComponent {

  @Input() public postData: Post;

  constructor(
    public router: Router,
  ) {
  }

  public upvote(): void {
    console.log("up");
  }

  public downvote(): void {
    console.log("down");
  }

  public redirectToDetails(id: number): void{
    this.router.navigate(['/post', id]);
  }

}
