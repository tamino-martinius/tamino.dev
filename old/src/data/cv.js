'use strict';

const CurriculumVitae = {
  PersonalData: {
    name: 'Tamino Martinius',
    birthName: 'Gaul',
    address: {
      street: 'Lehdenstr. 21',
      zip: '06847',
      city: 'Dessau-Rosslau',
    },
    email: ['dev@zaku.eu'],
    mobile: ['+49 1577 3752563'],
    nationality: 'DE',
    birthday: '16.10.1984',
  },
  TopSkills: [
    {
      name: 'NodeJs',
      references: [
        'shyftplan',
        'Nutanix',
        'Volkswagen AG',
        'Freelancer',
      ],
    },
    {
      name: 'AWS',
      references: [
        'shyftplan',
        'Freelancer',
      ],
    },
    {
      name: 'Ruby / RoR',
      references: [
        'shyftplan',
        'Freelancer',
      ],
    },
    {
      name: 'SQL',
      references: [
        'shyftplan',
        'Novotrand GmbH',
        'Freelancer',
      ],
    },
    {
      name: 'NoSQL',
      references: [
        'shyftplan',
        'Volkswagen AG',
        'Freelancer',
      ],
    },
  ],
  WorkExperience: [
    {
      company: 'shyftplan GmbH',
      startsAt: '01.12.2016',
      endsAt: null,
      position: [
        'Head of Code',
        'Head of Mobile',
      ],
      skills: [
        'AWS Lambda',
        'AWS Beanstalk',
        'AWS RDS',
        'NodeJs',
        'MongoDB',
        'Android',
        'iOS',
        'API',
        'Ruby on Rails',
        'PostgreSQL',
        'Redis',
      ],
    },
    {
      company: 'shyftplan GmbH',
      startsAt: '01.12.2014',
      endsAt: '30.11.2016',
      position: [
        'Backend Developer',
        'Head of Mobile',
      ],
      skills: [
        'NodeJs',
        'MongoDB',
        'Android',
        'iOS',
        'API',
        'Ruby on Rails',
        'PostgreSQL',
        'Redis',
      ],
    },
    {
      company: 'shyftplan GmbH',
      startsAt: '01.02.2015',
      endsAt: '01.07.2015',
      position: 'Backend Developer',
      skills: [
        'Ruby on Rails',
        'PostgreSQL',
        'Redis',
        'Elasticsearch',
      ],
    },
    {
      company: 'shyftplan GmbH',
      startsAt: '01.12.2014',
      endsAt: '31.01.2015',
      remote: true,
      position: 'Backend Developer',
      skills: [
        'Ruby on Rails',
        'PostgreSQL',
        'Redis',
        'Elasticsearch',
      ],
    },
    {
      company: 'Nutanix',
      startsAt: '01.11.2014',
      endsAt: '31.01.2015',
      remote: true,
      position: 'Frontend Developer',
      skills: [
        'NodeJs',
        'Less',
        'BackboneJs',
      ],
    },
    {
      company: 'Nutanix',
      startsAt: '01.08.2014',
      endsAt: '31.10.2014',
      remote: true,
      position: 'Frontend Developer',
      skills: [
        'PHP',
        'Javascript',
        'Less',
        'SVG Animations',
      ],
    },
    {
      company: 'Volkswagen AG',
      startsAt: '01.02.2014',
      endsAt: '31.01.2015',
      position: 'Developer (Research - NDA)',
      skills: [
        'NodeJs',
        'MongoDB',
        'Image Processing',
      ],
    },
    {
      company: 'Novotrand GmbH',
      startsAt: '01.04.2010',
      endsAt: '31.12.2013',
      position: 'Head of Code',
      skills: [
        'ASP.Net',
        'NodeJs',
        'SQL',
      ],
    },
    {
      company: 'Freelancer',
      startsAt: '2002',
      endsAt: '2013',
      position: 'Full Stack Developer',
      skills: [
        'NodeJs',
        'Ruby on Rails',
        'React',
        'PHP',
        'MongoDB',
        'SQL',
        'Stylus',
        'Less',
        'Sass',
        'SVG Animations',
      ],
    },
    {
      university: 'Philipps-Universität Marburg',
      startsAt: '2004',
      endsAt: '2015',
      graduiation: ' Intermediate diploma',
      skills: [
        'Numeric',
        'Math',
        'Parallel Execution',
        'Neuronal Networks',
        'Distributed Systems',
      ],
    },
  ],
};

module.exports = CurriculumVitae;
