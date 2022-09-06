import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListModule } from '../../reusable-modules/posts-list/post-list.module';
import {IntervalPostsRoutingModule} from "./interval-posts-routing.module";
import {IntervalPostsComponent} from "./interval-posts.component";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    IntervalPostsComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        IntervalPostsRoutingModule,
        PostListModule,
    ],
})
export class IntervalPostsModule { }
