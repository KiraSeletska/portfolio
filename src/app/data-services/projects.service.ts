import { Injectable } from '@angular/core';

export interface SkillsIcons {
  [key: string]: string;
}
interface BriefProjectCard {
  id: string;
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

  projectsVideo: BriefProjectCards =[ {
    id: 'onlineshope',
    title:  "Onlineshop Garten",
    skills: ['Javascript', 'React', 'Redux', 'Figma'],
   link: '../../assets/projectScreens/OnlineStore/Onlinestore.png',

  },
  {id: 'spacegame',
    title:  "Space Expatriate Game",
    skills: ['Typescript', 'React', 'MobX'],
    link: '../../assets/projectScreens/SpaceGame/SpaceGame.png',
  },
  {   id: 'designerportfolio',
    title:   'UI/UX Designer Portfolio',
    skills: ['Typescript', 'React', 'Figma'],
    link: '../../assets/projectScreens/WebPortfolio/Web-portfolio.png',
  },
  { id: 'languagecards',
    title:  "Language Cards",
    skills: ['Javascript', 'React', 'Redux'],
    link: '../../assets/projectScreens/LL/LL.png',
  },
  {  id: 'myportfolio',
    title:   "My First Portfolio",
    skills: ['Javascript', 'React'],
    link: '../../assets/projectScreens/MyFirstPortfolio/MyFirstPortfolio.png',
  },
 
  { id: 'todo',
    title:  "Todo",
    skills: ['Typescript', 'React', 'Redux'],
    link: '../../assets/projectScreens/TodoReact/Todo.png',
  },
]

getBriefProjectCards(){
    return this.projectsVideo;
  }
}
