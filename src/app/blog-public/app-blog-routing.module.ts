import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { VerEntradaBlogComponent } from './components/ver-entrada-blog/ver-entrada-blog.component';
import { BaseBlogComponent } from './layout/base-blog/base-blog.component';

const routes: Routes = [

  {
    path: '',
    component: BaseBlogComponent,
    children: [
      {
        path: ':id',
        component: VerEntradaBlogComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppBlogRoutingModule { }
