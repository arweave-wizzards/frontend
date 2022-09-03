import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WritePostComponent} from "./write-post.component";

const routes: Routes = [
  {path: '', component: WritePostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WritePostRoutingModule { }
