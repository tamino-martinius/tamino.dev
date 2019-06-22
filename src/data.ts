import {
  Stage,
  Job,
  Education,
  ShowCase,
  Skill,
  SkillSet,
  State,
} from './data_types';

/********
* State *
********/

export const state = new State();

/*********
* Header *
*********/

export const myName = 'Tamino Martinius';
export const profession = 'I speak Code';
export const street = 'Lehdenstr. 21';
export const postalCode = '06847';
export const city = 'Dessau';
export const emails: string[] = [
  'hi@zaku.eu',
  'hello@zaku.eu',
  'im-not-a-recruiter@zaku.eu',
];
export const socialNetworks: { [key: string]: string } = {
  github: 'https://github.com/tamino-martinius',
  codepen: 'https://codepen.io/Zaku/',
  dribbble: 'https://dribbble.com/TaminoMartinius',
  twitter: 'https://twitter.com/TaminoMartinius',
  linkedin: 'https://www.linkedin.com/in/tamino-martinius',
};


/*********
* Skills *
*********/

// AWS
// AWS / Compute
export const beanstalk: Skill = { level: 0.9, name: 'Beanstalk' };
export const ec2: Skill = { level: 0.9, name: 'EC2' };
export const ecs: Skill = { level: 0.9, name: 'ECS' };
export const fargate: Skill = { level: 0.7, name: 'Fargate' };
export const lambda: Skill = { level: 1.0, name: 'Lambda' };

// AWS / Data
export const aurora: Skill = { level: 1.0, name: 'RDS Aurora' };
export const dynamodb: Skill = { level: 0.8, name: 'DynamoDB' };
export const rds: Skill = { level: 1.0, name: 'DB Service' };
export const s3: Skill = { level: 1.0, name: 'S3' };

// AWS / Flow
export const apigateway: Skill = { level: 0.9, name: 'API Gateway' };
export const cloudfront: Skill = { level: 1.0, name: 'CloudFront' };
export const r53: Skill = { level: 1.0, name: 'Route 53' };
export const sns: Skill = { level: 0.9, name: 'SNS' };

// AWS / Management
export const cloudformation: Skill = { level: 0.9, name: 'CloudFormation' };
export const cloudtrail: Skill = { level: 0.8, name: 'CloudTrail' };
export const cloudwatch: Skill = { level: 1.0, name: 'CloudWatch' };
export const iam: Skill = { level: 0.9, name: 'IAM' };

// Backend
// Backend / CI
export const circleCI: Skill = { level: 0.8, name: 'CircleCI' };
export const jasmine: Skill = { level: 0.9, name: 'Jasmine' };
export const jenkins: Skill = { level: 0.9, name: 'Jenkins' };
export const jest: Skill = { level: 1.0, name: 'Jest' };
export const mocha: Skill = { level: 1.0, name: 'Mocha' };
export const rspec: Skill = { level: 1.0, name: 'RSpec' };
export const travis: Skill = { level: 0.9, name: 'Travis CI' };

// Backend / Code
export const asp: Skill = { level: 0.8, name: 'ASP.net' };
export const coffeescript: Skill = { level: 0.9, name: 'CoffeeScript' };
export const meteor: Skill = { level: 1.0, name: 'Meteor' };
export const nodejs: Skill = { level: 1.0, name: 'Node.js' };
export const rails: Skill = { level: 1.0, name: 'Ruby on Rails' };
export const ruby: Skill = { level: 1.0, name: 'Ruby' };
export const typescript: Skill = { level: 1.0, name: 'TypeScript' };

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

// Frontend
// Frontend / Logic
export const backbone: Skill = { level: 0.7, name: 'Backbone.js' };
export const browserify: Skill = { level: 0.8, name: 'Browserify' };
export const jquery: Skill = { level: 1.0, name: 'jQuery' };
export const js: Skill = { level: 1.0, name: 'JavaScript' };
export const websockets: Skill = { level: 0.8, name: 'WebSockets' };

// Frontend / Markup
export const haml: Skill = { level: 0.9, name: 'Haml' };
export const handlebars: Skill = { level: 1.0, name: 'Handlebars' };
export const html: Skill = { level: 1.0, name: 'HTML' };
export const php: Skill = { level: 0.7, name: 'PHP' };
export const markdown: Skill = { level: 0.9, name: 'Markdown' };
export const react: Skill = { level: 0.8, name: 'React' };
export const vuejs: Skill = { level: 1.0, name: 'Vue.js' };

// Frontend / Style
export const css: Skill = { level: 1.0, name: 'CSS' };
export const less: Skill = { level: 0.9, name: 'less' };
export const sass: Skill = { level: 0.9, name: 'Sass' };
export const stylus: Skill = { level: 1.0, name: 'Stylus' };
export const svg: Skill = { level: 1.0, name: 'SVG (Animations)' };

// Frontend / Design
export const afterEffects: Skill = { level: 0.3, name: 'After Effects' };
export const blender: Skill = { level: 0.5, name: 'Blender' };
export const sketch: Skill = { level: 0.8, name: 'Sketch' };
export const ui: Skill = { level: 0.7, name: 'User Interface' };
export const ux: Skill = { level: 0.6, name: 'User Experience' };

// Misc
export const teamlead: Skill = { level: 0.9, name: 'Team Lead' };
export const security: Skill = { level: 0.9, name: 'Security' };

// Study
export const logic: Skill = { level: 0.9, name: 'Logic' };
export const distributedSys: Skill = { level: 0.7, name: 'Distrib. Sys.' };
export const imageProcessing: Skill = { level: 0.7, name: 'Image Proces.' };
export const math: Skill = { level: 0.8, name: 'Math' };
export const neuronalNetwork: Skill = { level: 0.7, name: 'Neuronal Netw.' };
export const numeric: Skill = { level: 0.7, name: 'Numeric' };
export const parallelExec: Skill = { level: 0.7, name: 'Parallel Exec.' };

export const skills: SkillSet[] = [
  {
    title: 'AWS',
    data: [
      {
        title: 'Compute',
        data: { beanstalk, ec2, ecs, fargate, lambda },
      },
      {
        title: 'Data',
        data: { aurora, dynamodb, rds, s3 },
      },
      {
        title: 'Flow',
        data: { apigateway, cloudfront, r53, sns },
      },
      {
        title: 'Management',
        data: { cloudformation, cloudtrail, cloudwatch, iam },
      },
    ],
  },
  {
    title: 'Backend',
    data: [
      {
        title: 'CI',
        data: { circleCI, jasmine, jenkins, jest, mocha, rspec, travis },
      },
      {
        title: 'Code',
        data: { asp, meteor, nodejs, rails, ruby, typescript },
      },
      {
        title: 'Data',
        data: { api, apollo, elasticsearch, gql, mariadb, mysql, mongodb, mssql, psql, redis },
      },
      {
        title: 'Deploy',
        data: { android, cordova, docker, git, heroku, ios },
      },
    ],
  },
  {
    title: 'Frontend',
    data: [
      {
        title: 'Logic',
        data: { backbone, browserify, jquery, js, websockets },
      },
      {
        title: 'Markup',
        data: { haml, handlebars, html, php, markdown, react, vuejs },
      },
      {
        title: 'Style',
        data: { css, less, sass, stylus, svg },
      },
      {
        title: 'Design',
        data: { afterEffects, blender, sketch, ui, ux },
      },
    ],
  },
  {
    title: 'Misc',
    data: { teamlead, security },
  },
  {
    title: 'Study',
    data: { logic, distributedSys, imageProcessing, math, neuronalNetwork, numeric, parallelExec },
  },
];


/*******************
* Curriculum Vitae *
*******************/

export const curriculumVitae: (Job | Education)[] = [
  {
    company: 'shyftplan GmbH',
    description: `
      I lead shyftplans Front- and Backend Developers. I'm responsible to
      design, manage and build the Infrastructure for thousands of concurrent
      Users at Germanys best shift planning and accounting Web Application.
    `,
    startsAt: new Date('2017-07-01'),
    endsAt: undefined,
    remote: false,
    position: [
      'Head of Development',
      'Lead Engineering',
    ],
    skills: {
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
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I lead shyftplans Front- and Backend Developers. I'm responsible for
      the Web and Mobile Infrastructure for Germanys best shift planning and
      accounting Web Application.
    `,
    startsAt: new Date('2016-12-01'),
    endsAt: new Date('2017-06-30'),
    remote: false,
    position: [
      'Head of Code',
      'Head of Mobile',
    ],
    skills: {
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
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I plan and build the Infrastructure pre and post launch for Germanys best
      shift planning and accounting Web Application.
    `,
    startsAt: new Date('2015-02-01'),
    endsAt: new Date('2015-07-01'),
    remote: false,
    position: 'Backend Developer',
    skills: {
      rails,
      psql,
      redis,
      elasticsearch,
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I plan and build the Mobile App and Infrastructure for Germanys best
      shift planning and accounting Web Application.
    `,
    startsAt: new Date('2014-12-01'),
    endsAt: new Date('2016-11-30'),
    remote: false,
    position: [
      'Head of Mobile',
      'Backend Developer',
    ],
    skills: {
      nodejs,
      mongodb,
      android,
      ios,
      api,
      rails,
      psql,
      redis,
    },
  },

  {
    company: 'shyftplan GmbH',
    description: `
      I remotely plan and build the Infrastructure pre and post launch for
      Germanys best shift planning and accounting Web Application.
    `,
    startsAt: new Date('2014-12-01'),
    endsAt: new Date('2015-01-31'),
    remote: true,
    position: 'Backend Developer',
    skills: {
      rails,
      psql,
      redis,
      elasticsearch,
    },
  },

  {
    company: 'Nutanix',
    description: `
      I remotely worked as Frontend Developer on the Server Admin Interface of
      Nutanix Cloud Infrastructure.
    `,
    startsAt: new Date('2014-11-01'),
    endsAt: new Date('2015-01-31'),
    remote: true,
    position: 'Frontend Developer',
    skills: {
      nodejs,
      less,
      backbone,
    },
  },

  {
    company: 'Nutanix',
    description: `
      I remotely implemented a complete redesign of Nutanix website with
      PHP and less.
    `,
    startsAt: new Date('2014-08-01'),
    endsAt: new Date('2014-10-31'),
    remote: true,
    position: 'Frontend Developer',
    skills: {
      php,
      js,
      less,
      svg,
    },
  },

  {
    company: 'Volkswagen AG',
    description: `
      I researched a live video processing solution at Volkswagens destruction
      free analysis Team.
    `,
    startsAt: new Date('2014-02-01'),
    endsAt: new Date('2015-01-31'),
    remote: false,
    position: 'Developer (Research - NDA)',
    skills: {
      nodejs,
      mongodb,
      imageProcessing,
    },
  },

  {
    company: 'Novotrend GmbH',
    description: `
      I designed and planned build the Infrastructure of the most common Web
      Application to manage the process for pivate job adviser. I was also
      involved in creating a CRM for customer Websites.
    `,
    startsAt: new Date('2010-04-01'),
    endsAt: new Date('2013-12-31'),
    remote: false,
    position: 'Head of Code',
    skills: {
      asp,
      nodejs,
      mssql,
    },
  },

  {
    university: 'Philipps-Universität Marburg',
    description: `
      I studied IT with secondary subject Math. My focus was on Numeric,
      Parralel Execution, Neural Networks and functional programming languages.
    `,
    startsAt: new Date('2004'),
    endsAt: new Date('2015'),
    graduiation: 'Intermediate diploma',
    skills: {
      numeric,
      logic,
      math,
      parallelExec,
      neuronalNetwork,
      distributedSys,
    },
  },

  {
    company: 'Freelancer',
    description: `
      I created Websites for small and medium sized companies and worked
      remotely for enterprise customers.
    `,
    startsAt: new Date('2002'),
    endsAt: undefined,
    remote: true,
    position: 'Full Stack Developer',
    skills: {
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
    },
  },
];


/**************
* Experiments *
**************/

export const experiments: ShowCase[] = [
  {
    name: 'Hamburder Icon Animations',
    description: `
      I created a couple of different hamburger menu icon animations to open
      and close a menu. All icons are planned with sketch. The base svgs are all
      hand written with basic svg path commands. The icons are previewed on
      dribbble and the code is available Open Source at CodePen.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2018-08-06'),
    urls: [
      'https://dribbble.com/shots/4921561-Hamburger-Menu-Animation',
      'https://dribbble.com/shots/3539398--version-3',
      'https://dribbble.com/shots/3529235--version-2',
      'https://dribbble.com/shots/1674602-Menu-open-back',
      'https://dribbble.com/shots/1671182--version-1',
    ],
    media: [],
    skills: {
      svg,
      ui,
      ux,
      css,
      stylus,
      html,
      js,
      sketch,
    },
  },

  {
    name: 'Button Animations',
    description: `
      I created a couple of different Buttons which are planned to be the main
      call to action buttons on a website. All buttons are previewed on dribbble
      and the code is available Open Source at CodePen.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2017-07-02'),
    urls: [
      'https://dribbble.com/shots/3545734-Liquid-button-v2',
      'https://dribbble.com/shots/2629106-Button-Group',
      'https://dribbble.com/shots/1673204-Submit-Button',
    ],
    media: [],
    skills: {
      svg,
      ui,
      ux,
      css,
      stylus,
      html,
      js,
      sketch,
    },
  },

  {
    name: 'Particle Effects',
    description: `
      I experimented a lot to find a the best way to create performant three
      dimensional particle effects on a 2d canvas before WebGL was available at
      Browsers.
    `,
    startsAt: new Date('2014-08-05'),
    endsAt: new Date('2017-07-02'),
    urls: [
      'https://dribbble.com/shots/2649284-Dusty-Particle-Sphere',
    ],
    media: [],
    skills: {
      html,
      js,
    },
  },

  {
    name: 'Icon Animations',
    description: `
      I created a couple of different icon transitions which are based on
      svg paths. All icons are planned with sketch. The base svgs are all
      hand written with basic svg path commands. The icons are previewed on
      dribbble and the code is available Open Source at CodePen.
    `,
    startsAt: new Date('2014-08-15'),
    endsAt: new Date('2016-04-15'),
    urls: [
      'https://dribbble.com/shots/2654081-Download-icon-progress',
      'https://dribbble.com/shots/1989179-Animated-search-progress-icon',
      'https://dribbble.com/shots/1685755-Anited-sort-button',
      'https://dribbble.com/shots/1684424-SVG-Path-Animation-Experiment',
    ],
    media: [],
    skills: {
      svg,
      ui,
      ux,
      css,
      stylus,
      html,
      js,
      sketch,
    },
  },

  {
    name: 'After Effects/Blender Render',
    description: `
      Some of my dribbble shots are rendered with Blender and After Effects.
    `,
    startsAt: new Date('2014-05-30'),
    endsAt: new Date('2017-07-01'),
    urls: [
      'https://dribbble.com/shots/3536783-Rendered-cubes-landsape',
      'https://dribbble.com/shots/1625077-fluid-5',
      'https://dribbble.com/shots/1599550-Liquid-Germany',
      'https://dribbble.com/shots/1588162-Shop-Admin-Wireframe-WIP',
      'https://dribbble.com/shots/1581191-Cloud-Upload',
      'https://dribbble.com/shots/1575639-hello-dribbble',
    ],
    media: [],
    skills: {
      afterEffects,
      blender,
    },
  },
];


/***********
* Projects *
***********/

export const projects: ShowCase[] = [
  {
    name: 'GitHub Commit Vizualization',
    description: `
      I build a lambda function wich regulary checks my GitHub account for new
      commits and display them at [contributions.tamino.dev]. The data fetching
      and the UI are both open source available at GitHub
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://contributions.tamino.dev/',
      'https://dribbble.com/shots/4884965-GitHub-Contribution-Visualization',
      'https://github.com/tamino-martinius/contributions.taminomartinius.de',
      'https://github.com/tamino-martinius/lambda-get-all-github-contributions',
    ],
    media: [],
    skills: {
      s3,
      cloudfront,
      nodejs,
      lambda,
      typescript,
      stylus,
      html,
      vuejs,
      git,
    },
  },

  {
    name: 'Squoint',
    description: `
      Squoint is a puzzle game which is optimized for mobile devices and touch
      gestures. The game is currently in closed beta and will be launched soon.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://squoint.com',
    ],
    media: [],
    skills: {
      s3,
      cloudfront,
      nodejs,
      ec2,
      lambda,
      typescript,
      stylus,
      html,
      vuejs,
    },
  },

  {
    name: 'Colourcode',
    description: `
      Colourcode was created to make my life easier to create Websites for my
      customers. With colourcode i was able to find quickly new color schemes
      which match to the corporate identity of my clients.
    `,
    startsAt: new Date('2013'),
    endsAt: undefined,
    urls: [
      'https://colourco.de/',
      'https://github.com/tamino-martinius/colourco.de',
    ],
    media: [],
    skills: {
      s3,
      cloudfront,
      typescript,
      coffeescript,
      nodejs,
      stylus,
      html,
      handlebars,
      vuejs,
    },
  },

  {
    name: 'NextParticle',
    description: `
      NextParticle is the evolution of ParticleSlider. It's a complete rewrite
      of the code to improve the performance and make it easier to customize for
      the customers. The markup based initialization made it easier to create
      a wordpress plugin.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://nextparticle.nextco.de/',
    ],
    media: [],
    skills: {
      s3,
      cloudfront,
      lambda,
      nodejs,
      psql,
      typescript,
      html,
      stylus,
      vuejs,
    },
  },

  {
    name: 'GetShares',
    description: `
      GetShares is created to track you social media counts on all common
      social networks around the globe. It is also possible to create a unified
      look of all social media buttons.
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('2017'),
    urls: [
      'http://www.getshar.es/',
      'https://github.com/tamino-martinius/www.getshar.es',
      'https://github.com/tamino-martinius/api.getshar.es',
    ],
    media: [],
    skills: {
      s3,
      cloudfront,
      nodejs,
      js,
      html,
      stylus,
      handlebars,
    },
  },

  {
    name: 'ParticleSlider',
    description: `
      ParticleSlider is created based on my research of Particle effect
      rendering on a 2d canvas. It's possible to create amazing Particle
      Effects based on simple png images. ParticleSlider is discontinued
      since NextParticle is now available. All customers of ParticleSlider
      a version of NextParticle for free.
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('2017'),
    urls: [
      'https://nextparticle.nextco.de/',
      'http://particleslider.de/',
    ],
    media: [],
    skills: {
      ec2,
      coffeescript,
      js,
      html,
      css,
    },
  },

  {
    name: 'Iary',
    description: `
      Iary is a time tracking and reporting solution build as Web Application.
      It was discontinued in favor of my work at shyftplan. All customers got
      a complete refund.
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('2017'),
    urls: [],
    media: [],
    skills: {
      ec2,
      s3,
      cloudfront,
      js,
      html,
      nodejs,
      handlebars,
      meteor,
      stylus,
      websockets,
    },
  },

  {
    name: 'Butlr',
    description: `
      Butlr is a automatically generated city guide for all cities in Germany.
      It shows all Points of Interrest, Restaurants, etc. based on a enriched
      database build on GeoDB. This project is discontinued with GeoDB.
    `,
    startsAt: new Date('2013'),
    endsAt: new Date('2014'),
    urls: [],
    media: [],
    skills: {
      s3,
      cloudfront,
      nodejs,
      js,
      html,
      stylus,
      psql,
      api,
    },
  },

  {
    name: 'GeoDB',
    description: `
      GeoDB is a web scraper which is searching for all addresses and their
      geo coordinates in germany. The data is used on auto completes for
      Webpages. This project is discontinued becasue it has too high costs
      for a Website which generates no income.
    `,
    startsAt: new Date('2012'),
    endsAt: new Date('2014'),
    urls: [],
    media: [],
    skills: {
      nodejs,
      js,
      html,
      stylus,
      psql,
      api,
    },
  },
];


/********
* Talks *
********/

export const talks: ShowCase[] = [

  {
    name: 'Lets talk about ... New JavaScript Features (2019 Editon)',
    description: `
      A yearly overview what happened in JavaScript and whats on the
      early stages of ECMAScript. An small into to interesting new functions.
    `,
    startsAt: new Date('2019'),
    endsAt: new Date('2019'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--new-js-features--2019',
      'https://new-js-features--2019.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      nodejs,
    },
  },

  {
    name: 'Lets talk about ... SAM (Serverless Access Model)',
    description: `
      An introduction to the Tooling and concept of Serverless
      Applications within AWS.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--sam',
      'https://sam.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      nodejs,
      lambda,
    },
  },

  {
    name: 'Lets talk about ... API (of shyftplan)',
    description: `
      A short introduction of APIs in general and the models of shyftplan in
      specific. This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--api',
      'https://api.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      api,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... New JavaScript Features (2018 Editon)',
    description: `
      A yearly overview what happened in JavaScript and whats on the
      early stages of ECMAScript. An small into to interesting new functions.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--new-js-features--2018',
      'https://new-js-features--2018.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      nodejs,
    },
  },

  {
    name: 'Lets talk about ... SQL Query Performance',
    description: `
      A small guide in writing good and performant SQL Queries which give very
      responsed even with millions of records. I also explain why/when a database
      index is useful and which one i should use.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2018'),
    endsAt: new Date('2018'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--sql-query-performance',
      'https://sql-query-performance.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      psql,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... GraphQL',
    description: `
      When should i use GraphlQL and what are the differences to REST and how
      does a GraphQL API look like from the Consumers and Developers perspective.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--graphql',
      'https://graphql.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      gql,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... TypeScript',
    description: `
      A quick introduction to TypeScript and its differenced to JavaScript.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--typescript',
      'https://typescript.lets-talk-about.tamino.dev',
    ],
    media: [],
    skills: {
      typescript,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Lets talk about ... Template',
    description: `
      A template with example slides. Thats my base branch with which i create
      my slides for presentations.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--template',
      'https://github.com/tamino-martinius/lets-talk-about--example',
    ],
    media: [],
    skills: {
      api,
      nodejs,
      html,
      stylus,
    },
  },
];


/***********
* Packages *
***********/

export const packages: ShowCase[] = [
  {
    name: 'Lets talk about ... Template',
    description: `
      A template with example slides. Thats my base branch with which i create
      my slides for presentations.
    `,
    startsAt: new Date('2017'),
    endsAt: undefined,
    urls: [
      'https://github.com/tamino-martinius/lets-talk-about--template',
      'https://github.com/tamino-martinius/lets-talk-about--example',
    ],
    media: [],
    skills: {
      api,
      nodejs,
      html,
      stylus,
    },
  },

  {
    name: 'Next Model',
    description: `
      Next Model is the evolution of Meteor Smart Record. With this package
      you are able to define Model relations and write database independend
      queries to fetch data.
    `,
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
    skills: {
      nodejs,
      typescript,
      js,
      psql,
      gql,
      api,
    },
  },

  {
    name: 'Meteor Smart Record',
    description: `
      Meteor Smart Record is a package to define Model relations and write
      MongoDB queries in a simple and object orientated way. It's a dependency
      for Meteor Smart Form which is a simple way to create forms based on models.
      This pacakge is discontinued on favor of Next Model which is a Meteor
      independent solution.
    `,
    startsAt: new Date('2015'),
    endsAt: new Date('2017'),
    urls: [
      'https://github.com/tamino-martinius/meteor-smart-record',
      'https://github.com/tamino-martinius/meteor-smart-form',
      'https://github.com/tamino-martinius/meteor-smart-form-delete-button',
    ],
    media: [],
    skills: {
      meteor,
      js,
      coffeescript,
      mongodb,
    },
  },

  {
    name: 'Meteor ics',
    description: `
      A iCalendar .ics export which also enabled to integrate recurring events.
    `,
    startsAt: new Date('2015'),
    endsAt: new Date('2015'),
    urls: [
      'https://github.com/tamino-martinius/meteor-ics',
    ],
    media: [],
    skills: {
      meteor,
      js,
    },
  },

  {
    name: 'Meteor lazy Analytics',
    description: `
      This pacakge provides a non blocking way to integrate Google Analytics
      where the credentials are dynamically fetched from the Server.
    `,
    startsAt: new Date('2015'),
    endsAt: new Date('2015'),
    urls: [
      'https://github.com/tamino-martinius/meteor-lazy-analytics',
    ],
    media: [],
    skills: {
      meteor,
      js,
    },
  },

  {
    name: 'Meteor Method Pagination',
    description: `
      This pacakge is a easy way to integrate pagination of data with Meteor
      Server side methods..
    `,
    startsAt: new Date('2014'),
    endsAt: new Date('2014'),
    urls: [
      'https://github.com/tamino-martinius/meteor-method-pagination',
    ],
    media: [],
    skills: {
      meteor,
      js,
      coffeescript,
    },
  },
];


/*******
* Misc *
*******/

export const misc: ShowCase[] = [
  {
    name: 'RVM Docker Images',
    description: `
      This repository generates a rainbow table of Ubuntu versions and Ruby
      versions. The source is available on GitHub and the prebuild images
      are available on Docker Hub.
    `,
    startsAt: new Date('2017'),
    endsAt: new Date('2018'),
    urls: [
      'https://hub.docker.com/r/taminomartinius/rvm/',
      'https://github.com/tamino-martinius/docker-rvm',
    ],
    media: [],
    skills: {
      docker,
    },
  },

  {
    name: 'Atom Spacebars language',
    description: `
      This Atom package enables syntax highlighting of Meteors Spacebars language.
      Currently not maintained because i use VS Code now as main Editor.
    `,
    startsAt: new Date('2016'),
    endsAt: new Date('2016'),
    urls: [
      'https://github.com/tamino-martinius/atom-language-spacebars',
    ],
    media: [],
    skills: {},
  },
];
