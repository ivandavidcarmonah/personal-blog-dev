import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { PersonalComponent } from './personal.component';

const routes: Routes = [
  {
    path: '', component: PersonalComponent,
    children: [
      {path: 'about-me', component: AboutMeComponent},
      {path: 'contact-me', component: ContactComponent},
      {path: 'developments', component: DevelopmentsComponent},
      {path: 'electronics', component: ElectronicsComponent},
      // {path: 'blog-public', component: BlogComponent},
      {path: '', redirectTo:'developments', pathMatch: 'full'},
      {path: '*', redirectTo:'developments', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPersonalRoutingModule { }
