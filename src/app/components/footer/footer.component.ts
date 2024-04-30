import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {  faAngular, faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  gitHubIcon = faGithub
  faEnvelope = faEnvelope;
  faAngular = faAngular;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;
  faLinkedin = faLinkedin;
}
