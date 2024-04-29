
import { Injectable } from '@angular/core';

export interface SkillsIcons {
    [key: string]: string;
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
      getSkillsIcons(){
        return this.skillsIcons
      }
}
