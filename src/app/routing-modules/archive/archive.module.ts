import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ]
})
export class ArchiveModule { }
