import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateText();
  }

  animateText(): void {
    gsap.from(['h1', 'h2', '.skills', '.text'], {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3 
    });

  }

}