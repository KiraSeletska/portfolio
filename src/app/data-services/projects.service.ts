import { Injectable } from '@angular/core';

export interface SkillsIcons {
  [key: string]: string;
}
interface BriefProjectCard {
  title: string;
  skills: string[]; 
  link: string; 
}

export interface BriefProjectCards extends Array<BriefProjectCard>{
  [index: number]: BriefProjectCard;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  skillsIcons: SkillsIcons = {
    Typescript: '../../assets/icons/icons_scills/typescript.svg',
    Javascript: '../../assets/icons/icons_scills/javascript.svg',
    SASS: '../../assets/icons/icons_scills/sass.svg',
    React: '../../assets/icons/icons_scills/react.svg',
    Angular: '../../assets/icons/icons_scills/angular.svg',
    MobX: '../../assets/icons/icons_scills/mobx.svg',
    Redux: '../../assets/icons/icons_scills/redux.svg',
    Figma: '../../assets/icons/icons_scills/figma.svg',
  };
  getSkillsIcons() {
    return this.skillsIcons;
  }

  projectsVideo: BriefProjectCards =[{
    title:  "Language Cards",
    skills: ['Javascript', 'React'],
    link: '../../assets/video/LL.mp4',
  },
  {
    title:  "Space Game",
    skills: ['Typescript', 'React'],
    link: '../../assets/video/SpaceGame.mp4',
  },
  {
    title:   'UI/UX Portfolio',
    skills: ['Typescript', 'React'],
    link: '../../assets/video/WebPortfolio.mp4',
  },
  {
    title:   "My First Portfolio",
    skills: ['Javascript', 'React'],
    link: '../../assets/video/MyFirstPortfolio.mp4',
  },
  {
    title:  "Online Store",
    skills: ['Javascript', 'React'],
    link: '../../assets/video/OnlineStore.mp4',
  },
  {
    title:  "Todo",
    skills: ['Typescript', 'React'],
    link: '../../assets/video/Todo.mp4',
  },
]

getBriefProjectCards(){
    return this.projectsVideo;
  }
}
