import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})


export class AboutComponent {

  @ViewChild('aboutRef', { static: true }) aboutRef!: ElementRef;
  @ViewChild('imageRef', { static: true }) imageRef!: ElementRef;

  originalHeight!: number;

  constructor() { }

  // Listen for window resize events
  @HostListener('window:resize')
  onResize() {
    this.updateHeight();
  }

  // Called when the component is initialized
  ngAfterViewInit() {
    this.updateHeight();
  }

  updateHeight() {
    const nativeElement = this.aboutRef.nativeElement;
    const currentHeight = nativeElement.offsetHeight;
    

    // Set the original height if it hasn't been set yet
    this.originalHeight = currentHeight;
    
    
    // Set the height of another component (assuming it has a reference)
    // Replace 'otherComponentRef' with the appropriate ViewChild reference
    this.imageRef.nativeElement.style.height = `${currentHeight}px`;
  }

  public images: string[] = [
    "../../assets/images/1.jpg",
    "../../assets/images/2.jpg",
    "../../assets/images/3.jpg",
    "../../assets/images/4.jpg",
    "../../assets/images/5.jpg"
  ];

}
