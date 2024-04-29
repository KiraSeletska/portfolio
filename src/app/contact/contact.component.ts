import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CubeComponent } from '../cube/cube.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, CubeComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit{
  @ViewChild(CubeComponent) cubeComponent!: CubeComponent;

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 10,
        pin: true,
        trigger: '.contactWrapper',
        start: '50% 50%',
        endTrigger: '.contactWrapper',
        end: 'bottom 50%',
         markers: true,
      },
    });

    tl.to(this.cubeComponent.cubeRef.nativeElement, {
      rotateX: 900,
      rotateY: 900,
    });
 
}
}
