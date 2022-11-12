import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBlogRoutingModule } from './app-blog-routing.module';
import { LayoutModule } from './layout/layout.module';
import { VerEntradaBlogComponent } from './components/ver-entrada-blog/ver-entrada-blog.component';
import {  NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { GetImagen } from './pipes/get-files';



@NgModule({
  declarations: [
    VerEntradaBlogComponent,
    GetImagen
  ],
  imports: [
    CommonModule,
    AppBlogRoutingModule,
    LayoutModule,
    NgbRatingModule,

  ]
})
export class BlogModule { }
