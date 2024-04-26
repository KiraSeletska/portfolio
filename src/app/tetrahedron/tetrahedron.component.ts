import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-tetrahedron',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tetrahedron.component.html',
  styleUrl: './tetrahedron.component.scss'
})
export class TetrahedronComponent  implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    gsap.set('.faceTetrahedron', {
      rotateY: '45, -45, 135, -135', // Углы поворота для каждой грани
      rotateX: '35.264, 35.264, -35.264, -35.264', // Углы поворота для каждой грани
      transformOrigin: '50% 50% -50px', // Центр вращения
    });
  }

}
