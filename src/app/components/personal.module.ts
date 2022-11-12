import { NgModule } from '@angular/core';
import { AppPersonalRoutingModule } from './app-personal-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { BlogComponent } from './blog/blog.component';
import { PersonalComponent } from './personal.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { GetImagen } from './pipes/get-files';



@NgModule({
  declarations: [
    PersonalComponent,
    NavbarComponent,
    SidebarComponent,
    AboutMeComponent,
    ContactComponent,
    DevelopmentsComponent,
    ElectronicsComponent,
    BlogComponent,
    GetImagen
  ],
  imports: [
    CommonModule,
    AppPersonalRoutingModule,
    FontAwesomeModule,
  ]
})
export class PersonalModule { }
