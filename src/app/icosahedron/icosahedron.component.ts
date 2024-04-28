import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 

@Component({
  selector: 'app-icosahedron',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icosahedron.component.html',
  styleUrl: './icosahedron.component.scss'
})
export class IcosahedronComponent /*implements AfterViewInit */{/*
  @ViewChild('icosahedron') icosahedronRef!: ElementRef<HTMLDivElement>;

  rotss = [
    { ry: 0,   rx: 0  }, // 1
    { ry: 72,  rx: 36 }, // 2
    { ry: 144, rx: 72 }, // 3
    { ry: 216, rx: 108 }, // 4
    { ry: 288, rx: 144 }, // 5
    { ry: 360, rx: 180 }, // 6
    { ry: 432, rx: 216 }, // 7
    { ry: 504, rx: 252 }, // 8
    { ry: 576, rx: 288 }, // 9
    { ry: 648, rx: 324 }, // 10
    { ry: 720, rx: 360 }, // 11
    { ry: 792, rx: 396 }, // 12
    { ry: 864, rx: 432 }, // 13
    { ry: 936, rx: 468 }, // 14
    { ry: 1008, rx: 504 }, // 15
    { ry: 1080, rx: 540 }, // 16
    { ry: 1152, rx: 576 }, // 17
    { ry: 0, rx: 612 }, // 18
  ];

  constructor() {}

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline(); 

    gsap.set(this.icosahedronRef.nativeElement.children, { 
      rotateY: (i) => this.rotss[i].ry,
      rotateX: (i) => this.rotss[i].rx,
      transformOrigin: "50% 50% -150px",
      z: 150,
    });
  }*/
}
