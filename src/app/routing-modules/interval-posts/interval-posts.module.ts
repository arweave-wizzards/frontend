import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ]
})
export class IntervalPostsModule { }
