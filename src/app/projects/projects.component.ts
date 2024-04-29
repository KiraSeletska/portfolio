import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CubeComponent } from '../cube/cube.component';
import { CommonModule } from '@angular/common';
import { ProjectsService, BriefProjectCards, SkillsIcons } from '../data-services/projects.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CubeComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements AfterViewInit{
  @ViewChildren('videoWrapper') videoWrappers!: QueryList<ElementRef>;


  briefProjectCards!: BriefProjectCards;
  skills!: SkillsIcons;

  constructor(private projectsBrief: ProjectsService) {}

  ngOnInit(): void {
    this.briefProjectCards = this.projectsBrief.getBriefProjectCards();
    this.skills = this.projectsBrief.getSkillsIcons();
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  
    this.videoWrappers.forEach((wrapper, index) => {
      gsap.from(wrapper.nativeElement, {
        scrollTrigger: {
          trigger: wrapper.nativeElement,
          start: 'top bottom', 
          end: 'bottom top', 
          toggleActions: 'play reverse play reverse',
          refreshPriority: 0, 
        },
        opacity: 0,
        y: 250,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.3 * index
      });
    });
  }
  
}
