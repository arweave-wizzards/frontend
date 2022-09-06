import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsListComponent} from "./posts-list.component";
import {PostBlockModule} from "./post-block/post-block.module";
import {SharedPipesModule} from "../../shared-pipes/shared-pipes.module";



@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    CommonModule,
    PostBlockModule,
    SharedPipesModule,
  ],
  exports: [
    PostsListComponent,
  ]
})
export class PostListModule { }
