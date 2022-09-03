import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {IntervalPostsComponent} from "./interval-posts.component";

const routes: Routes = [
  {path: '', component: IntervalPostsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntervalPostsRoutingModule { }
