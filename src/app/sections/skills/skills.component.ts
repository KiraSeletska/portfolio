import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsBarComponent } from '../../components/skills-bar/skills-bar.component'; 

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillsBarComponent ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  {

  }
  
  
  

