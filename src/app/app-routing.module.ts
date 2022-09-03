import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'monthly-posts', pathMatch: 'full'},
  {path: 'monthly-posts', loadChildren: ()=>import('./routing-modules/interval-posts/interval-posts.module').then(m=>m.IntervalPostsModule)},
  {path: 'archive', loadChildren: ()=>import('./routing-modules/archive/archive.module').then(m=>m.ArchiveModule)},
  {path: 'profile', loadChildren: ()=>import('./routing-modules/profile/profile.module').then(m=>m.ProfileModule)},
  {path: 'write-post', loadChildren: ()=>import('./routing-modules/write-post/write-post.module').then(m=>m.WritePostModule)},
  {path: 'about-project', loadChildren: ()=>import('./routing-modules/about-project/about-project.module').then(m=>m.AboutProjectModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule{}
