import { Injectable } from '@angular/core';

export interface DevelopmentExperience {
    title: string;
    period: string;
    place: string;
    description: string;
    task: string;
    portfolioWebSite: string;
    portfolioSource: string;
    gameWebSite: string;
    gameSource: string;
  }
  
  export interface PreviousEmployment {
    title: string;
    period: string;
    place: string;
    description: string;
  }
  
  export interface Experience {
    developmentExperience: DevelopmentExperience;
    previousEmployment: PreviousEmployment[];
  }

  export interface Education {
    title: string;
    institution: string;
    place: string;
    period: string;
    degree: string;
    knowledge: string;
    basicKnowledge: string;
    diploma: string;
    source: string;
  }
  
  export interface Languages {
    english: string;
    ukrainian: string;
    german: string;
    russian: string;
  }
  
@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experience: Experience = {
    developmentExperience:  {
      title: 'Frontend Developer',
      period: '2023',
      place: 'Intership',
      task:
        'Transfer a board game online, create a website for a UI/UX designers',
        description: 'Our work was carried out in a team of three frontend developers under the guidance of a frontend architect. Tasks were assigned to the team or to each employee separately. Basic communication via GitHub',
      portfolioWebSite: 'https://igmat.github.io/LandingPortfolio/',
      portfolioSource: 'https://github.com/Igmat/LandingPortfolio',
      gameWebSite: 'https://igmat.github.io/SpaceExpatriateReact/',
      gameSource: 'https://github.com/Igmat/SpaceExpatriateReact',

    },
    previousEmployment: [
      {
        title: 'Head of Sales Department',
        period: '2022',
        place: 'Kyiv, Ukraine',
        description: 'Sales management (2 call centers, B2B, opening offline stores, TV platforms)',
      },
      {
        title: 'Head of Sales ',
        period: '2021',
        place: 'Kyiv, Ukraine',
        description:
          'Commercial real estate management (24 objects). Pilot project',
      },
      {
        title: 'Head of Sales',
        period: '2018-2020',
        place: 'Kyiv, Ukraine',
        description:
          'Creating a department from scratch. Contracts with VIP clients from a month to a year',
      },
      {
        title: 'Call Center Supervisor ',
        period: '2017-2018',
        place: 'Kyiv, Ukraine',
        description:
          'Sale of real estate from the developer, managing 3 residential complexes',
      },
      {
        title: 'Self-employed ',
        period: '2015-2017',
        place: 'Kyiv, Ukraine',
        description:
          'Services for the purchase and sale of primary real estate',
      },
      {
        title: 'Sales Department Manager ',
        period: '2012-2015',
        place: 'Kyiv, Ukraine',
        description:
          'Services for the purchase and sale of primary and secondary real estate. Received a promotion for good results',
      },
      {
        title: 'Sales Manager',
        period: '2011-2012',
        place: 'Kyiv, Ukraine',
        description: "Increasing sales in the assigned territory"
      },
      {
        title: 'Sales Manager',
        period: '2009-2011',
        place: 'Romny-Konotop, Ukraine',
        description: "Increasing sales in the assigned territory"
          
      },
    ],
  };
  getExperience(){
    return this.experience
  }
  education: Education[] = [
    {
      title: 'Frontend Developer ',
      institution: 'Starta Institute by Tel-Ran',
      place: 'Germany, Berlin',
      period: '2022-2023',
      degree: '',
      knowledge:
        'HTML5, CSS, SASS, JavaScript, React, Redux, Redux-toolkit, RTK-Query, SQL, noSQL and MongoDB, GitHub, Algorithms, Project Management',
      basicKnowledge: 'Java, QA, Linux, Git',
      diploma:
        'Onlineshop Garten',
      source: 'https://github.com/KiraSeletska/Project/tree/main/Project',
    },
    {
      title: 'Finance',
      institution: 'Sumy National Agrarian University',
      place: 'Ukraine, Sumy',
      period: '2004-2008',
      degree: "Bachelor's degree in Economics",
      knowledge: '',
      basicKnowledge: '',
      diploma: '',
      source: '',
    },
  ];
getEducation(){
    return this.education
}
  languages: Languages = {
    english: 'Upper-Intermediate',
    ukrainian: 'Native',
    german: 'Elementary',
    russian: 'Native',
  };
  getLanguage(){
    return this.languages
  }
}
