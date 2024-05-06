import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '../../data-services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService, SkillsIcons } from '../../data-services/projects.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})

export class ProjectComponent implements OnInit {
  project: Project | undefined;
  skills!: SkillsIcons;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private projectsBrief: ProjectsService,
  ) {}

  ngOnInit(): void {

    window.scrollTo(0, 0);

    this.skills = this.projectsBrief.getSkillsIcons();
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id');
      if (projectId) {
        this.project = this.projectService.getProjectById(projectId);
      }
    });
  }

  navigateToMain(): void {
    this.router.navigate(['/home']);

    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
}