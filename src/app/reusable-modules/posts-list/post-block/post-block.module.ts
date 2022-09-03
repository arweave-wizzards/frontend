import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostBlockComponent} from "./post-block.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    PostBlockComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PostBlockComponent,
  ]
})
export class PostBlockModule { }
