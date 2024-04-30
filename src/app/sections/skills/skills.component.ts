import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsBarComponent } from '../../components/skills-bar/skills-bar.component'; 
import { ProfSoftSkillsComponent } from '../../components/prof-soft-skills/prof-soft-skills.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillsBarComponent,ProfSoftSkillsComponent ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent  {

  }
  
  
  

