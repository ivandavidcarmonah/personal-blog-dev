import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperInsertarComponent } from './components/developer-insertar/developer-insertar.component';
import { DeveloperListadosComponent } from './components/developer-listados/developer-listados.component';
import { DeveloperAdminComponent } from './developer-admin.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        component: DeveloperAdminComponent
      },

      {
        path: 'new',
        component: DeveloperInsertarComponent
      },
      {
        path: 'edit/:id',
        component: DeveloperInsertarComponent
      },
      {
        path: 'list',
        component: DeveloperListadosComponent
      },
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeveloperAdminRoutingModule { }
