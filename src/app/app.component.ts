import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, ContactComponent, ProjectsComponent, HomeComponent, ExperianceComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onClick(elem: HTMLElement) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }


}
