import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {RouterModule} from "@angular/router";
import {SharedPipesModule} from "../../shared-pipes/shared-pipes.module";


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedPipesModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
