import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { AdminSiteComponent } from './admin-site.component';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [

  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'developer-admin',
        loadChildren: () => import('./pages/developer-admin/developer-admin.module').then(m => m.DeveloperAdminModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
