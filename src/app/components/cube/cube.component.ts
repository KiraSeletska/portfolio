import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

@Component({
  selector: 'app-cube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.scss'
})
export class CubeComponent implements AfterViewInit {
  @ViewChild('cube') cubeRef!: ElementRef<HTMLDivElement>;
  rots = [
    { ry: 0,   rx: 0  }, 
    { ry: 90,  rx: 0  }, 
    { ry: 180, rx: 0  }, 
    { ry: 270, rx: 0  }, 
    { ry: 0,   rx: 90 }, 
    { ry: 0,   rx:-90 } 
  ];

  constructor() {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline(); 

    gsap.set(".face", { 
      rotateY: (i) => this.rots[i].ry,
      rotateX: (i) => this.rots[i].rx,
      transformOrigin: "50% 50% -250px",
      z: 150,
    });

  }
}
