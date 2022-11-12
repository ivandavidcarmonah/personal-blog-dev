import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBlogRoutingModule } from './app-blog-routing.module';
import { LayoutModule } from './layout/layout.module';
import { VerEntradaBlogComponent } from './components/ver-entrada-blog/ver-entrada-blog.component';
import {  NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { GetImagen } from './pipes/get-files';
import { HomeComponent } from './components/home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    VerEntradaBlogComponent,
    GetImagen,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppBlogRoutingModule,
    LayoutModule,
    NgbRatingModule,
    FontAwesomeModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class BlogModule { }


interface NgxSpinnerConfig {
  type?: string;
}