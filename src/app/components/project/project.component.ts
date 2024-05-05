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

/*
export class ProjectComponent implements OnInit {
  project: Project | undefined;

  constructor(private router: ActivatedRoute, 

    private projectService: ProjectService) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      const projectId = params.get('id');
      if (projectId) {
        this.project = this.projectService.getProjectById(projectId);
      }
    });
  }
  navigateToMain(): void {
    this.router.navigate(['/home']); // Переход на главную страницу
  }
}
*/
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
    // Получаем id проекта из параметра маршрута
    this.skills = this.projectsBrief.getSkillsIcons();
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('id');
      if (projectId) {
        // Получаем информацию о проекте по его id
        this.project = this.projectService.getProjectById(projectId);
      }
    });
  }

  // Функция для перехода на главную страницу
  navigateToMain(): void {
    this.router.navigate(['/home']);
  }
}