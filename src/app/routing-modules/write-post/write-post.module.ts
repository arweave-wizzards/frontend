import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WritePostRoutingModule} from "./write-post-routing.module";
import {WritePostComponent} from "./write-post.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    WritePostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WritePostRoutingModule,
  ]
})
export class WritePostModule { }
