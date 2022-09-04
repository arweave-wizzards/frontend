import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WritePostRoutingModule} from "./write-post-routing.module";
import {WritePostComponent} from "./write-post.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    WritePostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    WritePostRoutingModule,
    FormsModule,
  ]
})
export class WritePostModule { }
