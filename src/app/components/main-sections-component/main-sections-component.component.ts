import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from '../../sections/contact/contact.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { HomeComponent } from '../../sections/home/home.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main-sections-component',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, ContactComponent, ProjectsComponent, HomeComponent, ExperienceComponent, SkillsComponent],
  templateUrl: './main-sections-component.component.html',
  styleUrl: './main-sections-component.component.scss'
})
export class MainSectionsComponentComponent {
  onClick(elem: HTMLElement) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
}
