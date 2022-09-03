import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostBlockComponent} from "./post-block.component";



@NgModule({
  declarations: [
    PostBlockComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PostBlockComponent,
  ]
})
export class PostBlockModule { }
