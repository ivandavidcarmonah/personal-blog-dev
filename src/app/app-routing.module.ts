import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin-site', 
    loadChildren:  () => import('./private/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'personal',
    loadChildren:  () => import('./components/personal.module').then(m => m.PersonalModule)
  },
  {
    path: 'blog-public',
    loadChildren:  () => import('./blog-public/blog.module').then(m => m.BlogModule)
  },
  
  {path: '', redirectTo:'personal', pathMatch: 'full'},
  {path: '**', redirectTo:'personal', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
