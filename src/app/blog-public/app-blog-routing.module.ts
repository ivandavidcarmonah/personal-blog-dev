import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { VerEntradaBlogComponent } from './components/ver-entrada-blog/ver-entrada-blog.component';
import { BaseBlogComponent } from './layout/base-blog/base-blog.component';

const routes: Routes = [

  {
    path: '',
    component: BaseBlogComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: ':id',
        component: VerEntradaBlogComponent
      },
      {
        path: '**',
        component: HomeComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppBlogRoutingModule { }
