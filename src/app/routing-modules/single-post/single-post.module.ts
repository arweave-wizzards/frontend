import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SinglePostRoutingModule} from "./single-post-routing.module";
import {SinglePostComponent} from "./single-post.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SinglePostRoutingModule,
  ]
})
export class SinglePostModule { }
