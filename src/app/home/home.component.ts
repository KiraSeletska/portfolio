import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { HomeService } from '../data-services/home.service';
import {
  ProjectsService,
  SkillsIcons,
} from '../data-services/projects.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  text!: string;
  skills!: SkillsIcons;
  skillsKeys!: string[];

  constructor(
    private homeSection: HomeService,
    private skillsIcons: ProjectsService
  ) {}

  ngOnInit(): void {
    this.text = this.homeSection.getHelloText();
    this.skills = this.skillsIcons.getSkillsIcons();
    this.skillsKeys = Object.keys(this.skills);
    this.animateText();
  }

  animateText(): void {
    gsap.from(['h1', 'h2', '.skills', '.text'], {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3,
    });
  }
}
