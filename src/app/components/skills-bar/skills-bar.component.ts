
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-bar.component.html',
  styleUrl: './skills-bar.component.scss'
})
export class SkillsBarComponent  implements AfterViewInit {

  @ViewChild('html') htmlEl!: ElementRef;
  @ViewChild('css') cssEl!: ElementRef;
  @ViewChild('javascript') javascriptEl!: ElementRef;
  @ViewChild('typescript') typescriptEl!: ElementRef;
  @ViewChild('react') reactEl!: ElementRef;
  @ViewChild('angular') angularEl!: ElementRef;
  @ViewChild('gitHub') gitHubEl!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const animateSkill = (element: ElementRef, width: string) => {
      gsap.to(element.nativeElement, { width, duration: 2 });
    };

    if (this.htmlEl) {
      ScrollTrigger.create({
        trigger: this.htmlEl.nativeElement,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        onEnter: () => animateSkill(this.htmlEl, '90%'),
      });
    }
    if (this.cssEl) {
      ScrollTrigger.create({
        trigger: this.cssEl.nativeElement,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        onEnter: () => animateSkill(this.cssEl, '90%'),
      });
    }

    if (this.javascriptEl) {
      ScrollTrigger.create({
        trigger: this.javascriptEl.nativeElement,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        onEnter: () => animateSkill(this.javascriptEl, '80%'),
      });
    }

    if (this.typescriptEl) {
      ScrollTrigger.create({
        trigger: this.typescriptEl.nativeElement,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        onEnter: () => animateSkill(this.typescriptEl, '70%'),
      });
    }

    if (this.reactEl) {
      ScrollTrigger.create({
        trigger: this.reactEl.nativeElement,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        onEnter: () => animateSkill(this.reactEl, '80%'),
      });
    }
    if (this.angularEl) {
      ScrollTrigger.create({
        trigger: this.angularEl.nativeElement,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        onEnter: () => animateSkill(this.angularEl, '50%'),
      });
    }
    if (this.gitHubEl) {
      ScrollTrigger.create({
        trigger: this.gitHubEl.nativeElement,
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: true,
        onEnter: () => animateSkill(this.gitHubEl, '80%'),
      });
    }
  }
  }
  
  
  

