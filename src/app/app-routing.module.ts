import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  // {path: 'home',         component: HomeComponent},
  // {path: 'about',        component: AboutComponent},
  // {path: 'education',    component: EducationComponent},
  // {path: 'technologies', component: TechnologiesComponent},
  // {path: 'projects',     component: ProjectsComponent},
  // {path: 'contact',      component: ContactComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
