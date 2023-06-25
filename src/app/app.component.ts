import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dark:Boolean = false; 
  
  darkMode(){
    if(this.dark==false){
      this.dark=true;
    }
    else{
      this.dark=false;
    }

    let navbar = document.querySelector(".navigation_container");
    navbar?.classList.toggle("dark");
    
  }

  scrollToComponent(componentId: string): void {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
