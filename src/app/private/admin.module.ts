import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppAdminRoutingModule } from './app-admin-routing.module';
import { AdminSiteComponent } from './admin-site.component';
import { LayoutModule } from './layout/layout.module';
import { DeveloperAdminComponent } from './pages/developer-admin/developer-admin.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [AdminSiteComponent, DeveloperAdminComponent],
  imports: [
    CommonModule,
    AppAdminRoutingModule,
    LayoutModule,
  ],
  providers: [
   
  ]
})
export class AdminModule { }
