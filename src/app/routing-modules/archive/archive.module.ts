import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListModule } from '../../reusable-modules/posts-list/post-list.module';
import {ArchiveRoutingModule} from "./archive-routing.module";
import {ArchiveComponent} from "./archive.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ArchiveComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        ArchiveRoutingModule,
        PostListModule,
    ],
})
export class ArchiveModule { }
