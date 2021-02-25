import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var typed = new Typed('.main-header', {
      strings: [
        'I am a ^1000 Full-Stack Developer',
        'I am a ^1000 Torontonian',
        'I am a ^1000 Hockey Player',
        'I am a ^1000 Student',
      ],
      smartBackspace: true,
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: '_',
      autoInsertCss: true,
    });
  }


}
