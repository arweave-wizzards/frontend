import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutProjectRoutingModule} from "./about-project-routing.module";
import {AboutProjectComponent} from "./about-project.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AboutProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AboutProjectRoutingModule,
  ]
})
export class AboutProjectModule { }
