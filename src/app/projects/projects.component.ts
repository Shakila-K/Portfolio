import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  darkMode(){
    document.querySelector(".projects")?.classList.toggle("dark");
    document.querySelector(".grid_item")?.classList.toggle("dark");
    console.log("done")
  }
}
