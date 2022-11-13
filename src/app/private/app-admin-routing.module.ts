import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { AdminSiteComponent } from './admin-site.component';
import { AuthGuard } from './core/guard/auth.guard';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [

  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard] 
      },
      {
        path: 'developer-admin',
        loadChildren: () => import('./pages/developer-admin/developer-admin.module').then(m => m.DeveloperAdminModule),
        canActivate: [AuthGuard] 
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }
