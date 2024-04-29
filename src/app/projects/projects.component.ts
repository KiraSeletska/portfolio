import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CubeComponent } from '../cube/cube.component';
import { CommonModule } from '@angular/common';
import { ProjectsService, BriefProjectCards, SkillsIcons } from '../data-services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CubeComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent{
  @ViewChild(CubeComponent) cubeComponent!: CubeComponent;

  briefProjectCards!: BriefProjectCards;
  skills!: SkillsIcons;

  constructor(private projectsBrief: ProjectsService) {}

  ngOnInit(): void {
    this.briefProjectCards = this.projectsBrief.getBriefProjectCards();
    this.skills = this.projectsBrief.getSkillsIcons();
  }

}
