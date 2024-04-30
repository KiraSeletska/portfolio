import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection: string | undefined;
  logoVisible: boolean = false;
  logoWidth: number = 20;
  logoHeight: number = 20;

  constructor(private viewportScroller: ViewportScroller) {
    this.checkActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkActiveSection();
    this.onWindowScroll();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  checkActiveSection() {
    const scrollPosition = this.viewportScroller.getScrollPosition();
    const sections = ['home',  'projects', 'skills','experience', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  onWindowScroll() {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      const rect = homeSection.getBoundingClientRect();
      if (rect.bottom <= 0) {
        this.animateLogoIn();
      } else {
        this.animateLogoOut();
      }
    }
  }

  animateLogoIn() {
    gsap.to('.logo', { duration: 0.5, opacity: 1, y: 0, x: 0 });
  }

  animateLogoOut() {
    const targetX = (window.innerWidth - this.logoWidth) / 2;
    const targetY = (window.innerHeight - this.logoHeight) / 2;

    gsap.to('.logo', { duration: 0.5, opacity: 0, x: targetX, y: targetY });
  }
}
