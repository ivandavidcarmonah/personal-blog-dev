import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppAdminRoutingModule } from './app-admin-routing.module';
import { AdminSiteComponent } from './admin-site.component';
import { LayoutModule } from './layout/layout.module';
import { DeveloperAdminComponent } from './pages/developer-admin/developer-admin.component';
import { QuillModule } from 'ngx-quill';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './core/guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AdminSiteComponent, DeveloperAdminComponent],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AdminModule { }
