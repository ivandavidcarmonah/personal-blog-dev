import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperAdminRoutingModule } from './app-developer-admin-routing.module';
import { DeveloperListadosComponent } from './components/developer-listados/developer-listados.component';
import { DeveloperInsertarComponent } from './components/developer-insertar/developer-insertar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GetImagen } from 'src/app/pipes/get-files';
import { EditorModule } from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    DeveloperListadosComponent,
    DeveloperInsertarComponent,
    GetImagen
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    DeveloperAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule

    
  ]
})
export class DeveloperAdminModule { }
