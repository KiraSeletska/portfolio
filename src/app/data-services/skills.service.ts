import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  level: number; // от 0 до 100
}

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  developerSkills: Skill[] = [
    { name: 'html', level: 90 },
    { name: 'css', level: 90 },
    { name: 'javascript', level: 80 },
    { name: 'typescript', level: 70 },
    { name: 'react', level: 80 },
    { name: 'angular', level: 50 },
    { name: 'gitHub', level: 90 },
  ];
  getDevelopersSkills(): Skill[] {
    return this.developerSkills;
  }

  professionalSkills: string[] = [
    'Communication',
    'Time Management',
    'Conflict Resolution',
    'Independent Problem Solving',
  ];
  getProfessionalSkills(): string[] {
    return this.professionalSkills;
  }
  softSkills: string[] = [
    'Responsibility',
    'Stress Tolerance',
    'Self-Motivation',
    'Flexibility and Adaptability',
    'Independence',
  ];
  getSoftSkills(): string[] {
    return this.softSkills;
  }
}
