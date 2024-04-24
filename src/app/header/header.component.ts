import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener} from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeSection: string | undefined;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkActiveSection();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  checkActiveSection() {
    const scrollPosition = this.viewportScroller.getScrollPosition();
    const sections = ['home', 'projects', 'experience', 'contact']; 
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
}