import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  
  name!: string;
  email!: string;
  message!: string;

  ngOnInit() {
    emailjs.init('YLXjpmd4rUfLkyJbM');
  }

  submitForm(){
    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message
    };
  
    emailjs.send('service_oe4d7zx', 'template_sr9d60i', templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (error) => {
        console.error('Email sending failed!', error);
       
      });
  }

  darkMode(){
    document.querySelector(".contact_container")?.classList.toggle("dark");
  }
}
