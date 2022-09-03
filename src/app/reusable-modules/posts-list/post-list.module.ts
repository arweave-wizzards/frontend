import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsListComponent} from "./posts-list.component";
import {PostBlockModule} from "./post-block/post-block.module";



@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    CommonModule,
    PostBlockModule
  ],
  exports: [
    PostsListComponent,
  ]
})
export class PostListModule { }
