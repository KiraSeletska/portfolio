import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { SkillService } from '../../data-services/skills.service';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-prof-soft-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prof-soft-skills.component.html',
  styleUrls: ['./prof-soft-skills.component.scss'],
})
export class ProfSoftSkillsComponent implements AfterViewInit {

  professionalSkills!: string[];
  softSkills!: string[];

  constructor(private skills: SkillService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.professionalSkills = this.skills.getProfessionalSkills();
    this.softSkills = this.skills.getSoftSkills();
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  
    const skillsSection = this.elementRef.nativeElement.querySelector('.skills');
  
    ScrollTrigger.create({
      trigger: skillsSection,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        const tl = gsap.timeline(); 
  
        const squares: Element[] = gsap.utils.toArray('.square') as Element[];
        squares.forEach(square => {
          tl.to(square, { 
            duration: 0.5, 
            width: '10px', 
            height: '10px' }); 
        });
      },
      //markers: true
    });
  }
  
}
