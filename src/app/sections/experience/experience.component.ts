import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DevelopmentExperience, PreviousEmployment, Education, Languages, ExperienceService } from '../../data-services/experience.service';
import { CommonModule } from '@angular/common';
import { CubeComponent } from '../../components/cube/cube.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, CubeComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  @ViewChild('experienceCube') cubeComponent!: CubeComponent;
  
  developmentExperience!: DevelopmentExperience;
  previousEmployment!: PreviousEmployment[];
  education!: Education[];
  languages!: Languages;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.developmentExperience = this.experienceService.getExperience().developmentExperience;
    this.previousEmployment = this.experienceService.getExperience().previousEmployment;
    this.education = this.experienceService.getEducation();
    this.languages = this.experienceService.getLanguage();
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to(this.cubeComponent.cubeRef.nativeElement, {
      rotateX: 1800,
      rotateY: 1800,
      duration: 20, 
      repeat: -1, 
      ease: 'linear',
      markers: true
    });
  }
  
}
