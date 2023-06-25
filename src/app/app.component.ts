import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private home: HomeComponent,
    private about: AboutComponent,
    private education: EducationComponent,
    private tech: TechnologiesComponent,
    private projects: ProjectsComponent,
    private contact: ContactComponent,

  ){}

  dark:Boolean = false; 
  
  darkMode(){
    this.dark=!this.dark;

    document.querySelector(".navigation_container")?.classList.toggle("dark");
    document.querySelector(".flexItem")?.classList.toggle("dark");
    document.querySelector(".components_container")?.classList.toggle("dark");

    this.home.darkMode();
    this.about.darkMode();
    this.education.darkMode();
    this.tech.darkMode();
    this.projects.darkMode();
    this.contact.darkMode();
  }

  scrollToComponent(componentId: string): void {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
