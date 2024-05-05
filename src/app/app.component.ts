import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; 
import { CommonModule } from '@angular/common';
import { ContactComponent } from './sections/contact/contact.component'; 
import { ExperienceComponent } from './sections/experience/experience.component';
import { HomeComponent } from './sections/home/home.component'; 
import { ProjectsComponent } from './sections/projects/projects.component'; 
import { SkillsComponent } from './sections/skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, ContactComponent, ProjectsComponent, HomeComponent, ExperienceComponent, SkillsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /*
  onClick(elem: HTMLElement) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }*/


}
