import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  ecperience = {
    title: 'experience',
    workPlaces: [
      {
        title: 'Frontend Developer',
        period: '2023',
        place: '',
        description:
          'Transfer a board game online, create a website for a web designer. Our work was carried out in a team of three frontend developers under the guidance of a frontend architect. Tasks were assigned to the team or to each employee separately. Basic communication via GitHub',
      },
      {
        title: 'Head of Sales Department',
        period: '2022',
        place: 'Kyiv, Ukraine',
        description: 'managing the sales direction',
      },
      {
        title: 'Head of Sales ',
        period: '2021',
        place: 'Kyiv, Ukraine',
        description:
          'managing commercial real estate. Additional tasks - creating a call center to consolidate four projects',
      },
      {
        title: 'Head of Sales/Commercial Director',
        period: '2018-2020',
        place: '',
        description:
          'establishing a department from scratch. Contracts ranging from one month to one year',
      },
      {
        title: 'Call Center Supervisor ',
        period: '2017-2018',
        place: 'Kyiv, Ukraine',
        description:
          'Sale of real estate from the developer, managing 3 residential complexes',
      },
      {
        title: 'Sales Department Manager ',
        period: '2012-2015',
        place: 'Kyiv, Ukraine',
        description:
          'Services for the purchase and sale of primary and secondary real estate',
      },
      {
        title: 'Sales Manager',
        period: '2011-2012',
        place: 'Kyiv, Ukraine',
        description:
          'Increasing sales in the assigned territory, attracting new customers, controlling accounts receivable',
      },
      {
        title: 'Sales Manager',
        period: '2009-2011',
        place: 'Romny-Konotop, Ukraine',
        description:
          'Joined the company as a Sales Manager in Romny. After a year, participated in the opening of a branch in Konotop (since 2010), where the responsibilities of a Sales Manager were expanded to include those of a Branch Manager',
      },
    ],
    education: [
      {
        title: 'Fontend Developer ',
        institution: 'Starta Institute by Tel-Ran',
        place: 'Germany, Berlin',
        period: '2022-2023',
        degree: '',
        knowledge:
          'HTML5, CSS, SASS, JavaScript, React, Redux, Redux-toolkit, RTK-Query, SQL, noSQL and MongoDB, Algorithms, Project Management',
        basicKnowledge: 'Java, QA, Linux',
        diploma:
          'Online Store (JavaScript, React, Redux, Redux-toolkit, HTML, SASS, GitHub )',
        source: '',
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
    ],
    languages: {
        english: 'Upper-Intermediate',
        ukrainian: 'Native',
        russian: 'Native'
    }
  };
}
