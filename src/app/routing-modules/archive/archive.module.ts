import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArchiveRoutingModule} from "./archive-routing.module";
import {ArchiveComponent} from "./archive.component";
import {RouterModule} from "@angular/router";
import {PostListModule} from "../../reusable-modules/posts-list/post-list.module";



@NgModule({
  declarations: [
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArchiveRoutingModule,
    PostListModule,
  ]
})
export class ArchiveModule { }
