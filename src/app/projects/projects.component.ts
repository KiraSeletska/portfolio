import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CubeComponent } from '../cube/cube.component';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CubeComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 10,
        pin: true,
        trigger: "#projectsWrapper",
        start: "50% 50%",
        endTrigger: "#projectsWrapper",
        end: "bottom 50%"
      }
    });

    tl.to("#projectsWrapper", {
      rotateZ: 900
    });
  }

}