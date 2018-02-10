import {
  Stage,
  Job,
  Education,
  ShowCase,
  Skill,
  SkillSet,
} from './data_types';

/*********
* Header *
*********/

export const myName = "Tamino Martinius";
export const profession = "I speak Code";


/*********
* Skills *
*********/

// AWS
// AWS / Compute
export const beanstalk: Skill = { level: 0.9, name: 'Elastic Beanstalk' };
export const ec2: Skill = { level: 0.9, name: 'Elastic Compute Cloud' };
export const ecs: Skill = { level: 0.8, name: 'Elastic Container Service' };
export const lambda: Skill = { level: 1.0, name: 'Lambda' };

// AWS / Data
export const dynamodb: Skill = { level: 0.8, name: 'DynamoDB' };
export const rds: Skill = { level: 1.0, name: 'Relational Database Service' };
export const aurora: Skill = { level: 1.0, name: 'RDS Aurora' };
export const s3: Skill = { level: 1.0, name: 'Simple Storage Service' };

// AWS / Flow
export const apigateway: Skill = { level: 0.9, name: 'API Gateway' };
export const cloudfront: Skill = { level: 1.0, name: 'CloudFront' };
export const r53: Skill = { level: 1.0, name: 'Route 53' };
export const sns: Skill = { level: 0.9, name: 'Simple Notification Service' };

// AWS / Management
export const cloudformation: Skill = { level: 0.9, name: 'CloudFormation' };
export const cloudtrail: Skill = { level: 0.8, name: 'CloudTrail' };
export const cloudwatch: Skill = { level: 1.0, name: 'CloudWatch' };
export const iam: Skill = { level: 0.9, name: 'Identity and Access Management' };

// Backend / CI
export const circleci: Skill = { level: 0.8, name: 'CircleCI' };
export const jasmine: Skill = { level: 0.9, name: 'Jasmine' };
export const jenkins: Skill = { level: 0.9, name: 'Jenkins' };
export const mocha: Skill = { level: 1.0, name: 'Mocha' };
export const rspec: Skill = { level: 1.0, name: 'RSpec' };
export const travis: Skill = { level: 0.9, name: 'Travis CI' };

// Backend / Code
export const asp: Skill = { level: 0.8, name: 'ASP.net' };
export const meteor: Skill = { level: 1.0, name: 'Meteor' };
export const nodejs: Skill = { level: 1.0, name: 'Node.js' };
export const rails: Skill = { level: 1.0, name: 'Ruby on Rails' };
export const ruby: Skill = { level: 1.0, name: 'Ruby' };

// Backend / Data
export const api: Skill = { level: 1.0, name: 'API' };
export const apollo: Skill = { level: 1.0, name: 'Apollo GraphQL' };
export const elasticsearch: Skill = { level: 0.7, name: 'elasticsearch' };
export const gql: Skill = { level: 1.0, name: 'GraphQL' };
export const mariadb: Skill = { level: 0.8, name: 'MariaDB' };
export const mysql: Skill = { level: 0.8, name: 'MySQL' };
export const mongodb: Skill = { level: 0.9, name: 'MongoDB' };
export const mssql: Skill = { level: 0.9, name: 'Microsoft SQL' };
export const psql: Skill = { level: 1.0, name: 'PostgreSQL' };
export const redis: Skill = { level: 0.8, name: 'Redis' };

// Backend / Deploy
export const android: Skill = { level: 0.8, name: 'Android' };
export const cordova: Skill = { level: 0.9, name: 'Apache Cordova' };
export const docker: Skill = { level: 0.9, name: 'Docker' };
export const git: Skill = { level: 1.0, name: 'Git' };
export const heroku: Skill = { level: 0.9, name: 'Heroku' };
export const ios: Skill = { level: 0.9, name: 'iOS' };

// Frontend / Logic
export const backbone: Skill = { level: 0.7, name: 'Backbone.js' };
export const browserify: Skill = { level: 0.8, name: 'Browserify' };
export const jquery: Skill = { level: 1.0, name: 'jQuery' };
export const js: Skill = { level: 1.0, name: 'JavaScript' };

// Frontend / Markup
export const haml: Skill = { level: 0.9, name: 'Haml' };
export const handlebars: Skill = { level: 1.0, name: 'Handlebars' };
export const html: Skill = { level: 1.0, name: 'HyperText Markup Language' };
export const php: Skill = { level: 0.7, name: 'PHP' };
export const markdown: Skill = { level: 0.9, name: 'Markdown' };
export const react: Skill = { level: 0.8, name: 'React' };
export const vuejs: Skill = { level: 1.0, name: 'Vue.js' };

// Frontend / Style
export const css: Skill = { level: 1.0, name: 'Cascading Style Sheets' };
export const less: Skill = { level: 0.9, name: 'less' };
export const sass: Skill = { level: 0.9, name: 'Sass' };
export const stylus: Skill = { level: 1.0, name: 'Stylus' };
export const svg: Skill = { level: 1.0, name: 'SVG / SVG Animations' };

// Frontend / Design
export const sketch: Skill = { level: 1.0, name: 'Sketch' };
export const afterEffects: Skill = { level: 0.7, name: 'After Effects' };
export const ui: Skill = { level: 0.8, name: 'User Interface' };
export const ux: Skill = { level: 0.8, name: 'User Experience' };

// Soft Skills / Misc
export const teamlead: Skill = { level: 0.9, name: 'Team Lead' };
export const security: Skill = { level: 0.9, name: 'Security' };

// Study
export const logic: Skill = { level: 0.9, name: 'Logic' };
export const distributedSys: Skill = { level: 0.7, name: 'Distributed Systems' };
export const imageProcessing: Skill = { level: 0.7, name: 'Image Processing' };
export const math: Skill = { level: 0.8, name: 'Math' };
export const neuronalNetwork: Skill = { level: 0.7, name: 'Neuronal Networks' };
export const numeric: Skill = { level: 0.7, name: 'Numeric' };
export const parallelExec: Skill = { level: 0.7, name: 'Parallel Execution' };


/*******************
* Curriculum Vitae *
*******************/

export const curriculumVitae: (Job | Education)[] = [
  {
    company: 'shyftplan GmbH',
    startsAt: new Date('01.07.2017'),
    endsAt: undefined,
    remote: false,
    position: [
      'Head of Development',
    ],
    skills: [
      lambda,
      beanstalk,
      rds,
      aurora,
      nodejs,
      mongodb,
      android,
      ios,
      api,
      rails,
      psql,
      redis,
    ],
  },

  {
    company: 'shyftplan GmbH',
    startsAt: new Date('01.12.2016'),
    endsAt: new Date('30.06.2017'),
    remote: false,
    position: [
      'Head of Code',
      'Head of Mobile',
    ],
    skills: [
      lambda,
      beanstalk,
      rds,
      nodejs,
      mongodb,
      android,
      ios,
      api,
      rails,
      psql,
      redis,
    ],
  },

  {
    company: 'shyftplan GmbH',
    startsAt: new Date('01.12.2014'),
    endsAt: new Date('30.11.2016'),
    remote: false,
    position: [
      'Backend Developer',
      'Head of Mobile',
    ],
    skills: [
      nodejs,
      mongodb,
      android,
      ios,
      api,
      rails,
      psql,
      redis,
    ],
  },

  {
    company: 'shyftplan GmbH',
    startsAt: new Date('01.02.2015'),
    endsAt: new Date('01.07.2015'),
    remote: false,
    position: 'Backend Developer',
    skills: [
      rails,
      psql,
      redis,
      elasticsearch,
    ],
  },

  {
    company: 'shyftplan GmbH',
    startsAt: new Date('01.12.2014'),
    endsAt: new Date('31.01.2015'),
    remote: true,
    position: 'Backend Developer',
    skills: [
      rails,
      psql,
      redis,
      elasticsearch,
    ],
  },

  {
    company: 'Nutanix',
    startsAt: new Date('01.11.2014'),
    endsAt: new Date('31.01.2015'),
    remote: true,
    position: 'Frontend Developer',
    skills: [
      nodejs,
      less,
      backbone,
    ],
  },

  {
    company: 'Nutanix',
    startsAt: new Date('01.08.2014'),
    endsAt: new Date('31.10.2014'),
    remote: true,
    position: 'Frontend Developer',
    skills: [
      php,
      js,
      less,
      svg,
    ],
  },

  {
    company: 'Volkswagen AG',
    startsAt: new Date('01.02.2014'),
    endsAt: new Date('31.01.2015'),
    remote: false,
    position: 'Developer (Research - NDA)',
    skills: [
      nodejs,
      mongodb,
      imageProcessing,
    ],
  },

  {
    company: 'Novotrand GmbH',
    startsAt: new Date('01.04.2010'),
    endsAt: new Date('31.12.2013'),
    remote: false,
    position: 'Head of Code',
    skills: [
      asp,
      nodejs,
      mssql,
    ],
  },

  {
    company: 'Freelancer',
    startsAt: new Date('2002'),
    endsAt: undefined,
    remote: true,
    position: 'Full Stack Developer',
    skills: [
      nodejs,
      rails,
      react,
      php,
      mongodb,
      psql,
      mariadb,
      stylus,
      less,
      sass,
      svg,
    ],
  },

  {
    university: 'Philipps-Universität Marburg',
    startsAt: new Date('2004'),
    endsAt: new Date('2015'),
    graduiation: ' Intermediate diploma',
    skills: [
      numeric,
      logic,
      math,
      parallelExec,
      neuronalNetwork,
      distributedSys,
    ],
  },
];


/**************
* Experiments *
**************/

export const experiments: ShowCase[] = [
  {
    name: 'Button Animations',
    description: '',
    startsAt: new Date('05.08.2014'),
    endsAt: new Date('02.07.2017'),
    urls: [
      'https://dribbble.com/shots/3545734-Liquid-button-v2',
      'https://dribbble.com/shots/2629106-Button-Group',
      'https://dribbble.com/shots/1673204-Submit-Button',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Particle Effects',
    description: '',
    startsAt: new Date('05.08.2014'),
    endsAt: new Date('02.07.2017'),
    urls: [
      'https://dribbble.com/shots/2649284-Dusty-Particle-Sphere',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Hamburder Icon Animations',
    description: '',
    startsAt: new Date('05.08.2014'),
    endsAt: new Date('02.07.2017'),
    urls: [
      'https://dribbble.com/shots/3539398--version-3',
      'https://dribbble.com/shots/3529235--version-2',
      'https://dribbble.com/shots/1674602-Menu-open-back',
      'https://dribbble.com/shots/1671182--version-1',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Icon Animations',
    description: '',
    startsAt: new Date('15.08.2014'),
    endsAt: new Date('15.04.2016'),
    urls: [
      'https://dribbble.com/shots/2654081-Download-icon-progress',
      'https://dribbble.com/shots/1989179-Animated-search-progress-icon',
      'https://dribbble.com/shots/1685755-Anited-sort-button',
      'https://dribbble.com/shots/1684424-SVG-Path-Animation-Experiment',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'After Effects Render',
    description: '',
    startsAt: new Date('30.05.2014'),
    endsAt: new Date('01.07.2017'),
    urls: [
      'https://dribbble.com/shots/3536783-Rendered-cubes-landsape',
      'https://dribbble.com/shots/1625077-fluid-5',
      'https://dribbble.com/shots/1599550-Liquid-Germany',
      'https://dribbble.com/shots/1588162-Shop-Admin-Wireframe-WIP',
      'https://dribbble.com/shots/1581191-Cloud-Upload',
      'https://dribbble.com/shots/1575639-hello-dribbble',
    ],
    media: [],
    skills: [],
  },
];


/***********
* Projects *
***********/

export const projects: ShowCase[] = [
  {
    name: 'Squoint',
    description: '',
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://colourco.de/',
      'https://github.com/tamino-martinius/colourco.de',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Colourcode',
    description: '',
    startsAt: new Date('2013'),
    endsAt: undefined,
    urls: [
      'https://colourco.de/',
      'https://github.com/tamino-martinius/colourco.de',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'NextParticle',
    description: '',
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://nextparticle.nextco.de/',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'GetShares',
    description: '',
    startsAt: new Date('2014'),
    endsAt: new Date('2017'),
    urls: [
      'http://www.getshar.es/',
      'https://github.com/tamino-martinius/www.getshar.es',
      'https://github.com/tamino-martinius/api.getshar.es',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'ParticleSlider',
    description: '',
    startsAt: new Date('2014'),
    endsAt: new Date('2017'),
    urls: [
      'http://particleslider.de/',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Iary',
    description: '',
    startsAt: new Date('2014'),
    endsAt: new Date('2017'),
    urls: [
      '',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'GeoDB',
    description: '',
    startsAt: new Date('2012'),
    endsAt: new Date('2014'),
    urls: [
      '',
    ],
    media: [],
    skills: [],
  },
];


/********
* Talks *
********/

export const talks: ShowCase[] = [
  {
    name: 'Lets talk about TypeScript',
    description: '',
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about---typescript',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Lets talk about GraphQL',
    description: '',
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about---graphql',
    ],
    media: [],
    skills: [],
  },
];


/***********
* Packages *
***********/

export const packages: ShowCase[] = [
  {
    name: 'Next Model',
    description: '',
    startsAt: new Date('2016'),
    endsAt: undefined,
    urls: [
      'https://github.com/tamino-martinius/node-next-model',
      'https://github.com/tamino-martinius/node-next-model-api-router',
      'https://github.com/tamino-martinius/node-next-model-knex-connector',
      'https://github.com/tamino-martinius/node-next-model-api-server-express',
      'https://github.com/tamino-martinius/node-next-model-local-storage-connector',
      'https://github.com/tamino-martinius/node-next-model-api-client-connector',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Meteor Smart Record',
    description: '',
    startsAt: new Date('2015'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/meteor-smart-record',
      'https://github.com/tamino-martinius/meteor-smart-form',
      'https://github.com/tamino-martinius/meteor-smart-form-delete-button',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Meteor ics',
    description: '',
    startsAt: new Date('2015'),
    endsAt: new Date('2015'),
    urls: [
      'https://github.com/tamino-martinius/meteor-ics',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Meteor lazy Analytics',
    description: '',
    startsAt: new Date('2015'),
    endsAt: new Date('2015'),
    urls: [
      'https://github.com/tamino-martinius/meteor-lazy-analytics',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Meteor Method Pagination',
    description: '',
    startsAt: new Date('2014'),
    endsAt: new Date('2014'),
    urls: [
      'https://github.com/tamino-martinius/meteor-method-pagination',
    ],
    media: [],
    skills: [],
  },
  {
    name: 'Meteor lazy Analytics',
    description: '',
    startsAt: new Date('2015'),
    endsAt: new Date('2015'),
    urls: [
      'https://github.com/tamino-martinius/meteor-lazy-analytics',
    ],
    media: [],
    skills: [],
  },
];


/*******
* Misc *
*******/

export const misc: ShowCase[] = [
  {
    name: 'RVM Docker Images',
    description: '',
    startsAt: new Date('2017'),
    endsAt: new Date('2018'),
    urls: [
      'https://hub.docker.com/r/taminomartinius/rvm/',
      'https://github.com/tamino-martinius/docker-rvm',
    ],
    media: [],
    skills: [],
  },

  {
    name: 'Atom Spacebars language',
    description: '',
    startsAt: new Date('2016'),
    endsAt: new Date('2016'),
    urls: [
      'https://github.com/tamino-martinius/atom-language-spacebars',
    ],
    media: [],
    skills: [],
  },
];
