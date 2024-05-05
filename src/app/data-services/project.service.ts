import { Injectable } from '@angular/core';


export interface Project {
  id: string;
  title: string;
  skills: string[];
  linkToWebsite: string;
  linkToCode: string;
  description: string;
  videoLink: string;
  screensLinks: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 'onlineshope',
      title: 'Onlineshope Garten',
      skills: ['Javascript', 'React', 'Redux', 'Figma'],
      linkToWebsite: '',
      linkToCode: 'https://github.com/KiraSeletska/Project/tree/main/Project',
      description:
        'The online store is my graduation project, developed using JavaScript and the React library, with state management handled by Redux. The project was implemented based on a Figma layout, and it utilizes a pre-existing backend for data retrieval and transmission',
      videoLink: '../../assets/video/OnlineStore.mp4',
      screensLinks: [
        '../../assets/projectScreens/OnlineStore/Onlinestore.png',
        '../../assets/projectScreens/OnlineStore/Onlinestore3.png',
        '../../assets/projectScreens/OnlineStore/Onlinestore1.png',
        '../../assets/projectScreens/OnlineStore/Onlinestore5.png',
        '../../assets/projectScreens/OnlineStore/Onlinestore2.png',
        '../../assets/projectScreens/OnlineStore/Onlinestore6.png',
        '../../assets/projectScreens/OnlineStore/Onlinestore4.png',

      ],
    },
    {
      id: 'myportfolio',
      title: 'My first portfolio',
      skills: ['Javascript', 'React', "SASS"],
      linkToWebsite: 'https://seletska.vercel.app/',
      linkToCode: 'https://github.com/KiraSeletska/Presentation',
      description: "This is an adaptive single-page portfolio developed using React and JavaScript. The site serves as a personal space showcasing the author's works, projects, and skills. The layout is adapted for various devices, ensuring usability on mobile phones, tablets, and computers. Site navigation is implemented using a router, providing smooth transitions between sections and pages. Here, you can view the author's resume online or download it for more detailed information about their skills and work experienc",
      videoLink: '../../assets/video/MyFirstPortfolio.mp4',
      screensLinks: [
        '../../assets/projectScreens/MyFirstPortfolio/MyFirstPortfolio.png',
       // '../../assets/projectScreens/MyFirstPortfolio/MyFirstPortfolio1.png',
        '../../assets/projectScreens/MyFirstPortfolio/MyFirstPortfolio2.png',
        '../../assets/projectScreens/MyFirstPortfolio/MyFirstPortfolio3.png',

      ],
    },
    {
        id: 'spacegame',
        title: 'Space Expatriate Game',
        skills: ['Typescript', 'React', "MobX", "SASS"],
        linkToWebsite: 'https://igmat.github.io/SpaceExpatriateReact/',
        linkToCode: 'https://github.com/Igmat/SpaceExpatriateReact',
        description: "Space Expatriate Game is a game for 2, 3, and more players. This project was an exciting journey from an idea on paper to reality in the form of an online game. We used React, TypeScript, MobX, as well as object-oriented programming (OOP) principles to create an engaging gaming world. Our team consisted of three developers under the guidance of an experienced architect. We actively used GitHub to manage the development process and integrate new features",
        videoLink: '../../assets/video/SpaceGame.mp4',
        screensLinks: [
          '../../assets/projectScreens/SpaceGame/SpaceGame.png',
          '../../assets/projectScreens/SpaceGame/SpaceGame1.png',
          '../../assets/projectScreens/SpaceGame/SpaceGame2.png',
          '../../assets/projectScreens/SpaceGame/SpaceGame3.png',

        ],
      },
      {
        id: 'designerportfolio',
        title: 'UI/UX Designer Portfolio',
        skills: ['Typescript', 'React', "Figma", "SASS",],
        linkToWebsite: 'https://igmat.github.io/LandingPortfolio/',
        linkToCode: 'https://github.com/Igmat/LandingPortfolio',
        description: "This portfolio for UI/UX designers makes it easy for the customer to add new projects. Files in Markdown format are uploaded and automatically displayed on the home page. A click on 'Learn more' provides detailed project information",
        videoLink: '../../assets/video/WebPortfolio.mp4',
        screensLinks: [
          '../../assets/projectScreens/WebPortfolio/Web-portfolio.png',
          '../../assets/projectScreens/WebPortfolio/Web-portfolio1.png',

        ],
      },
      {
        id: 'languagecards',
        title: 'Language Cards',
        skills: ['Javascript', 'React', "Redux", "SCSS"],
        linkToWebsite: 'https://ll-ruby-three.vercel.app/',
        linkToCode: 'https://github.com/KiraSeletska/LL',
        description: "This app is a tool for creating language flashcards for learning. It's built using React, JavaScript, and Redux. Users can create and manage language flashcards to help them learn new words and phrases. Each card contains a list of words or phrases in a foreign language and their translation into the native language. The program provides the ability to filter words, making learning more convenient and efficient. Additionally, the app features productivity counters that display the number of learned words and new words, allowing users to track their progress in language learning. To store data, the app uses local storage, allowing users to save their language flashcards and learning progress between sessions",
        videoLink: '../../assets/video/LL.mp4',
        screensLinks: [
          '../../assets/projectScreens/LL/LL.png',
          '../../assets/projectScreens/LL/LL1.png',
          '../../assets/projectScreens/LL/LL2.png',
          '../../assets/projectScreens/LL/LL3.png',

        ],
      },
      {
        id: 'todo',
        title: 'Todo',
        skills: ['Typescript', 'React', "Redux", "SCSS"],
        linkToWebsite: 'https://todo-theta-amber.vercel.app/',
        linkToCode: 'https://github.com/KiraSeletska/Todo_TS',
        description: "This to-do list app is designed for convenience and efficiency. With an attractive and user-friendly interface, it's built using TypeScript and React, allowing users to create tasks and folders for better organization. For instance, users can create folders like 'Home Tasks' and 'Work Tasks' to categorize their to-dos more effectively. Tasks can be filtered by status (completed or pending), folder, and deadline, giving users flexibility in managing their tasks. Additionally, the app supports editing existing tasks, allowing users to update task details as needed. Thanks to its local data storage functionality, users can save their to-do lists and folders locally, ensuring data retention even after closing the app",
        videoLink: '../../assets/video/Todo.mp4',
        screensLinks: [
          '../../assets/projectScreens/TodoReact/Todo.png',
          '../../assets/projectScreens/TodoReact/Todo1.png',
          //'../../assets/projectScreens/TodoReact/Todo2.png',

        ],
      },
  ];

  getProjects() {
    return this.projects;
  }
  getProjectById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
