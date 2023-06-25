import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  darkMode(){
    document.querySelector(".home_container")?.classList.toggle("dark");
    document.querySelector(".glitch")?.classList.toggle("dark");
  }
}
