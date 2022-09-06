import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostBlockComponent} from "./post-block.component";
import {RouterModule} from "@angular/router";
import {SharedPipesModule} from "../../../shared-pipes/shared-pipes.module";



@NgModule({
  declarations: [
    PostBlockComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedPipesModule,
  ],
  exports: [
    PostBlockComponent,
  ]
})
export class PostBlockModule { }
