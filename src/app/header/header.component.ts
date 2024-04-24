import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { ExperianceComponent } from '../experiance/experiance.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HomeComponent, ProjectsComponent, ExperianceComponent, ContactComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('projectsSection') projectsSection!: ElementRef;

  constructor(private viewportScroller: ViewportScroller) {}

scrollToSection(sectionId: string) {
  const yOffset = -60; // Adjust the offset as per your layout
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}

  

}
