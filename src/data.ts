import {
  type Education,
  type Job,
  type ShowCase,
  type Skill,
  type SkillSet,
  State,
} from "./data_types";

/********
 * State *
 ********/

export const state = new State();

/*********
 * Header *
 *********/

export const myName = "Tamino Martinius";
export const profession = "I speak Code";
export const street = "Lehdenstr. 21";
export const postalCode = "06847";
export const city = "Dessau";
export const emails: string[] = ["io@tamino.dev", "dev@tamino.io", "im-not-a-recruiter@tamino.dev"];
export const socialNetworks: { [key: string]: string } = {
  codepen: "https://codepen.io/TaminoMartinius/",
  dribbble: "https://dribbble.com/TaminoMartinius",
  twitter: "https://twitter.com/TaminoMartinius",
  linkedin: "https://www.linkedin.com/in/tamino-martinius",
};
export const links: { [key: string]: string } = {
  github: "https://github.com/tamino-martinius",
  metrics: "https://metrics.tamino.dev/",
};

/*********
 * Skills *
 *********/

// Backend
// Backend / CI
export const biome: Skill = { level: 1.0, name: "Biome" };
export const circleCI: Skill = { level: 0.8, name: "CircleCI" };
export const cypress: Skill = { level: 0.9, name: "Cypress" };
export const eslint: Skill = { level: 1.0, name: "ESLint" };
export const jasmine: Skill = { level: 0.9, name: "Jasmine" };
export const jenkins: Skill = { level: 0.9, name: "Jenkins" };
export const jest: Skill = { level: 1.0, name: "Jest" };
export const mocha: Skill = { level: 1.0, name: "Mocha" };
export const playwright: Skill = { level: 1.0, name: "Playwright" };
export const rspec: Skill = { level: 1.0, name: "RSpec" };
export const travis: Skill = { level: 0.9, name: "Travis CI" };
export const vitest: Skill = { level: 1.0, name: "Vitest" };

// Backend / Code
export const asp: Skill = { level: 0.6, name: "ASP.net" };
export const coffeescript: Skill = { level: 0.7, name: "CoffeeScript" };
export const meteor: Skill = { level: 0.8, name: "Meteor" };
export const nodejs: Skill = { level: 1.0, name: "Node.js" };
export const rails: Skill = { level: 1.0, name: "Ruby on Rails" };
export const ruby: Skill = { level: 1.0, name: "Ruby" };
export const typescript: Skill = { level: 1.0, name: "TypeScript" };

// Backend / Data
export const api: Skill = { level: 1.0, name: "API" };
export const apollo: Skill = { level: 1.0, name: "Apollo GraphQL" };
export const elasticsearch: Skill = { level: 0.6, name: "elasticsearch" };
export const gql: Skill = { level: 1.0, name: "GraphQL" };
export const mariadb: Skill = { level: 0.9, name: "MariaDB" };
export const mongodb: Skill = { level: 0.8, name: "MongoDB" };
export const mssql: Skill = { level: 0.8, name: "Microsoft SQL" };
export const mysql: Skill = { level: 0.9, name: "MySQL" };
export const psql: Skill = { level: 1.0, name: "PostgreSQL" };
export const redis: Skill = { level: 0.8, name: "Redis" };
export const supabase: Skill = { level: 1.0, name: "Supabase" };
export const valkey: Skill = { level: 0.8, name: "Valkey" };

// Backend / Deploy
export const android: Skill = { level: 0.8, name: "Android" };
export const capacitor: Skill = { level: 0.9, name: "Capacitor" };
export const cordova: Skill = { level: 0.9, name: "Apache Cordova" };
export const docker: Skill = { level: 0.9, name: "Docker" };
export const git: Skill = { level: 1.0, name: "Git" };
export const heroku: Skill = { level: 0.9, name: "Heroku" };
export const ios: Skill = { level: 0.9, name: "iOS" };
export const vercel: Skill = { level: 1.0, name: "Vercel" };

// DevOps
// DevOps / Compute
export const beanstalk: Skill = { level: 0.9, name: "Beanstalk" };
export const ec2: Skill = { level: 0.9, name: "EC2" };
export const ecs: Skill = { level: 0.9, name: "ECS" };
export const eks: Skill = { level: 1.0, name: "EKS" };
export const fargate: Skill = { level: 0.6, name: "Fargate" };
export const lambda: Skill = { level: 1.0, name: "Lambda" };

// DevOps / Data
export const aurora: Skill = { level: 1.0, name: "RDS Aurora" };
export const dynamodb: Skill = { level: 0.8, name: "DynamoDB" };
export const rds: Skill = { level: 1.0, name: "DB Service" };
export const s3: Skill = { level: 1.0, name: "S3" };

// DevOps / Flow
export const apigateway: Skill = { level: 0.9, name: "API Gateway" };
export const cloudfront: Skill = { level: 1.0, name: "CloudFront" };
export const r53: Skill = { level: 1.0, name: "Route 53" };
export const sns: Skill = { level: 0.9, name: "SNS" };
export const kubernetes: Skill = { level: 1.0, name: "Kubernetes" };

// DevOps / Management
export const cloudformation: Skill = { level: 0.9, name: "CloudFormation" };
export const cloudtrail: Skill = { level: 0.8, name: "CloudTrail" };
export const cloudwatch: Skill = { level: 1.0, name: "CloudWatch" };
export const iam: Skill = { level: 0.9, name: "IAM" };

// Frontend
// Frontend / Logic
export const backbone: Skill = { level: 0.7, name: "Backbone.js" };
export const browserify: Skill = { level: 0.8, name: "Browserify" };
export const jquery: Skill = { level: 1.0, name: "jQuery" };
export const js: Skill = { level: 1.0, name: "JavaScript" };
export const websockets: Skill = { level: 0.8, name: "WebSockets" };
export const nextjs: Skill = { level: 1.0, name: "Next.js" };
export const reactQuery: Skill = { level: 1.0, name: "React Query" };
export const vite: Skill = { level: 1.0, name: "Vite" };

// Frontend / Markup
export const haml: Skill = { level: 0.9, name: "Haml" };
export const handlebars: Skill = { level: 1.0, name: "Handlebars" };
export const html: Skill = { level: 1.0, name: "HTML" };
export const markdown: Skill = { level: 0.9, name: "Markdown" };
export const php: Skill = { level: 0.7, name: "PHP" };
export const react: Skill = { level: 1.0, name: "React" };
export const svelte: Skill = { level: 0.8, name: "Svelte" };
export const vuejs: Skill = { level: 0.9, name: "Vue.js" };

// Frontend / Style
export const css: Skill = { level: 1.0, name: "CSS" };
export const less: Skill = { level: 0.7, name: "less" };
export const pandaCSS: Skill = { level: 0.9, name: "PandaCSS" };
export const scss: Skill = { level: 1.0, name: "Scss" };
export const styledComponents: Skill = { level: 1.0, name: "Styled Components" };
export const stylus: Skill = { level: 0.8, name: "Stylus" };
export const svg: Skill = { level: 1.0, name: "SVG (Animations)" };

// Frontend / Design
export const afterEffects: Skill = { level: 0.3, name: "After Effects" };
export const blender: Skill = { level: 0.5, name: "Blender" };
export const figma: Skill = { level: 1.0, name: "Figma" };
export const sketch: Skill = { level: 0.8, name: "Sketch" };
export const ui: Skill = { level: 0.7, name: "User Interface" };
export const ux: Skill = { level: 0.6, name: "User Experience" };

// Misc
export const teamlead: Skill = { level: 0.9, name: "Team Lead" };
export const technicalLead: Skill = { level: 0.9, name: "Technical Lead" };
export const security: Skill = { level: 0.9, name: "Security" };

// Study
export const logic: Skill = { level: 0.9, name: "Logic" };
export const distributedSys: Skill = { level: 0.7, name: "Distrib. Sys." };
export const imageProcessing: Skill = { level: 0.7, name: "Image Proces." };
export const math: Skill = { level: 0.8, name: "Math" };
export const neuronalNetwork: Skill = { level: 0.7, name: "Neuronal Netw." };
export const numeric: Skill = { level: 0.7, name: "Numeric" };
export const parallelExec: Skill = { level: 0.7, name: "Parallel Exec." };

export const skills: SkillSet[] = [
  {
    title: "Backend",
    data: [
      {
        title: "CI",
        data: {
          biome,
          circleCI,
          eslint,
          jasmine,
          jenkins,
          jest,
          cypress,
          mocha,
          playwright,
          rspec,
          travis,
          vitest,
        },
      },
      {
        title: "Code",
        data: { asp, coffeescript, meteor, nodejs, rails, ruby, typescript },
      },
      {
        title: "Data",
        data: {
          api,
          apollo,
          elasticsearch,
          gql,
          mariadb,
          mysql,
          mongodb,
          mssql,
          psql,
          redis,
          supabase,
          valkey,
        },
      },
      {
        title: "Deploy",
        data: { android, capacitor, cordova, docker, git, heroku, ios, vercel },
      },
    ],
  },
  {
    title: "DevOps",
    data: [
      {
        title: "Compute",
        data: { beanstalk, ec2, ecs, eks, fargate, lambda },
      },
      {
        title: "Data",
        data: { aurora, dynamodb, rds, s3, supabase },
      },
      {
        title: "Flow",
        data: { apigateway, cloudfront, r53, sns, supabase, kubernetes },
      },
      {
        title: "Management",
        data: { cloudformation, cloudtrail, cloudwatch, iam, supabase },
      },
    ],
  },
  {
    title: "Frontend",
    data: [
      {
        title: "Logic",
        data: { backbone, browserify, jquery, js, nextjs, reactQuery, vite, websockets },
      },
      {
        title: "Markup",
        data: { haml, handlebars, html, php, markdown, react, svelte, vuejs },
      },
      {
        title: "Style",
        data: { css, less, pandaCSS, scss, styledComponents, stylus, svg },
      },
      {
        title: "Design",
        data: { afterEffects, blender, figma, sketch, ui, ux },
      },
    ],
  },
  {
    title: "Misc",
    data: { teamlead, technicalLead, security },
  },
  {
    title: "Study",
    data: { logic, distributedSys, imageProcessing, math, neuronalNetwork, numeric, parallelExec },
  },
];

/*******************
 * Curriculum Vitae *
 *******************/

export const curriculumVitae: (Job | Education)[] = [
  {
    company: "ServiceNow",
    description: `
      I joined ServiceNow as a Staff Software Engineer to build the next generation of the ServiceNow platform.
      My core responsibility is to step up the software for the 21st century making it AI-powered and cloud-native.
    `,
    startsAt: new Date("2026-03-01"),
    endsAt: undefined,
    remote: false,
    position: ["Staff Software Engineer"],
    skills: {
      typescript,
      react,
      styledComponents,
      reactQuery,
      figma,
      playwright,
      vitest,
      eslint,
      cypress,
    },
  },

  {
    company: "shyftplan GmbH",
    description: `
      After 10 years at shyftplan, I changed my role from people manager to technical lead.
      I'm responsible for the technical direction of the company and the development of the products.
    `,
    startsAt: new Date("2024-06-01"),
    endsAt: new Date("2026-02-28"),
    remote: false,
    position: ["Technical Lead", "Co-Founder"],
    skills: {
      typescript,
      rds,
      aurora,
      nodejs,
      eks,
      android,
      ios,
      api,
      rails,
      psql,
      redis,
      supabase,
    },
  },

  {
    company: "Veza Technologies",
    description: `
      While covid hit the world, I started working as a remote software engineer at Veza Technologies.
      I joined the company while it was in stealth just after the company was founded.
      I was responsible for building the Access Graph - the heart of the product.
      As for shyftplan, Nutanix and Novotrend, I was building the foundation to bootstrap the company.
    `,
    startsAt: new Date("2020-10-01"),
    endsAt: new Date("2026-02-28"),
    remote: false,
    position: ["Staff Software Engineer"],
    skills: {
      typescript,
      react,
      styledComponents,
      reactQuery,
      figma,
      playwright,
      eslint,
      jest,
      cypress,
    },
  },

  {
    company: "shyftplan GmbH",
    description: `
      I lead shyftplans Development, Tech and Automation. I'm responsible to
      design, manage and build the Infrastructure for thousands of concurrent
      Users at Germanys best shift planning and accounting Web Application.
    `,
    startsAt: new Date("2020-03-01"),
    endsAt: new Date("2024-05-31"),
    remote: false,
    position: ["Chief Technology Officer", "Co-Founder"],
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
    company: "shyftplan GmbH",
    description: `
      I lead shyftplans Front- and Backend Developers. I'm responsible to
      design, manage and build the Infrastructure for thousands of concurrent
      Users at Germanys best shift planning and accounting Web Application.
    `,
    startsAt: new Date("2017-07-01"),
    endsAt: new Date("2020-02-28"),
    remote: false,
    position: ["Head of Development", "Lead Engineering", "Co-Founder"],
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
    company: "shyftplan GmbH",
    description: `
      I lead shyftplans Front- and Backend Developers. I'm responsible for
      the Web and Mobile Infrastructure for Germanys best shift planning and
      accounting Web Application.
    `,
    startsAt: new Date("2016-12-01"),
    endsAt: new Date("2017-06-30"),
    remote: false,
    position: ["Head of Code", "Head of Mobile", "Co-Founder"],
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
    company: "shyftplan GmbH",
    description: `
      I plan and build the Mobile App and Infrastructure for Germanys best
      shift planning and accounting Web Application.
    `,
    startsAt: new Date("2014-12-01"),
    endsAt: new Date("2016-11-30"),
    remote: false,
    position: ["Head of Mobile", "Backend Developer", "Co-Founder"],
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
    company: "pijajo UG (shyftplan GmbH)",
    description: `
      I remotely plan and build the Infrastructure pre and post launch for
      Germanys best shift planning and accounting Web Application.
    `,
    startsAt: new Date("2014-12-01"),
    endsAt: new Date("2015-01-31"),
    remote: true,
    position: "Backend Developer",
    skills: {
      rails,
      psql,
      redis,
      elasticsearch,
    },
  },

  {
    company: "Nutanix",
    description: `
      I remotely worked as Frontend Developer on the Server Admin Interface of
      Nutanix Cloud Infrastructure.
    `,
    startsAt: new Date("2014-11-01"),
    endsAt: new Date("2015-01-31"),
    remote: true,
    position: "Frontend Developer",
    skills: {
      nodejs,
      less,
      backbone,
    },
  },

  {
    company: "Nutanix",
    description: `
      I remotely implemented a complete redesign of Nutanix website with
      PHP and less.
    `,
    startsAt: new Date("2014-08-01"),
    endsAt: new Date("2014-10-31"),
    remote: true,
    position: "Frontend Developer",
    skills: {
      php,
      js,
      less,
      svg,
    },
  },

  {
    company: "Volkswagen AG",
    description: `
      I researched a live video processing solution at Volkswagens destruction
      free analysis Team.
    `,
    startsAt: new Date("2014-02-01"),
    endsAt: new Date("2015-01-31"),
    remote: false,
    position: "Developer (Research - NDA)",
    skills: {
      nodejs,
      mongodb,
      imageProcessing,
    },
  },

  {
    company: "Novotrend GmbH",
    description: `
      I designed and planned build the Infrastructure of the most common Web
      Application to manage the process for pivate job adviser. I was also
      involved in creating a CRM for customer Websites.
    `,
    startsAt: new Date("2010-04-01"),
    endsAt: new Date("2013-12-31"),
    remote: false,
    position: "Head of Code",
    skills: {
      asp,
      nodejs,
      mssql,
    },
  },

  {
    university: "Philipps-Universität Marburg",
    description: `
      I studied IT with secondary subject Math. My focus was on Numeric,
      Parralel Execution, Neural Networks and functional programming languages.
    `,
    startsAt: new Date("2004"),
    endsAt: new Date("2015"),
    graduiation: "Intermediate diploma",
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
    company: "Freelancer",
    description: `
      I created Websites for small and medium sized companies and worked
      remotely for enterprise customers.
    `,
    startsAt: new Date("2002"),
    endsAt: undefined,
    remote: true,
    position: "Full Stack Developer",
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
      scss,
      svg,
    },
  },
];

/**************
 * Experiments *
 **************/

export const experiments: ShowCase[] = [
  {
    name: "Hamburder Icon Animations",
    description: `
      I created a couple of different hamburger menu icon animations to open
      and close a menu. All icons are planned with sketch. The base svgs are all
      hand written with basic svg path commands. The icons are previewed on
      dribbble and the code is available Open Source at CodePen.
    `,
    startsAt: new Date("2014-08-05"),
    endsAt: new Date("2018-08-06"),
    urls: [
      "https://dribbble.com/shots/4921561-Hamburger-Menu-Animation",
      "https://dribbble.com/shots/3539398--version-3",
      "https://dribbble.com/shots/3529235--version-2",
      "https://dribbble.com/shots/1674602-Menu-open-back",
      "https://dribbble.com/shots/1671182--version-1",
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
    name: "Button Animations",
    description: `
      I created a couple of different Buttons which are planned to be the main
      call to action buttons on a website. All buttons are previewed on dribbble
      and the code is available Open Source at CodePen.
    `,
    startsAt: new Date("2014-08-05"),
    endsAt: new Date("2017-07-02"),
    urls: [
      "https://dribbble.com/shots/3545734-Liquid-button-v2",
      "https://dribbble.com/shots/2629106-Button-Group",
      "https://dribbble.com/shots/1673204-Submit-Button",
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
    name: "Particle Effects",
    description: `
      I experimented a lot to find a the best way to create performant three
      dimensional particle effects on a 2d canvas before WebGL was available at
      Browsers.
    `,
    startsAt: new Date("2014-08-05"),
    endsAt: new Date("2017-07-02"),
    urls: ["https://dribbble.com/shots/2649284-Dusty-Particle-Sphere"],
    media: [],
    skills: {
      html,
      js,
    },
  },

  {
    name: "Icon Animations",
    description: `
      I created a couple of different icon transitions which are based on
      svg paths. All icons are planned with sketch. The base svgs are all
      hand written with basic svg path commands. The icons are previewed on
      dribbble and the code is available Open Source at CodePen.
    `,
    startsAt: new Date("2014-08-15"),
    endsAt: new Date("2016-04-15"),
    urls: [
      "https://dribbble.com/shots/2654081-Download-icon-progress",
      "https://dribbble.com/shots/1989179-Animated-search-progress-icon",
      "https://dribbble.com/shots/1685755-Anited-sort-button",
      "https://dribbble.com/shots/1684424-SVG-Path-Animation-Experiment",
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
    name: "ASCII Art Generator",
    description: `
      Create ASCII Art from any Image and play around with the different settings.
      Uses CSS background-clip to place a layer of characters on top of images.
    `,
    startsAt: new Date("2018-08-13"),
    endsAt: new Date("2018-08-17"),
    urls: [
      "https://github.com/tamino-martinius/ui-snippets-ascii-generator",
    ],
    media: [],
    skills: {
      css,
      html,
      typescript,
    },
  },

  {
    name: "Starfield",
    description: `
      A starfield effect experiment rendered on canvas.
    `,
    startsAt: new Date("2018-08-20"),
    endsAt: new Date("2018-08-30"),
    urls: [
      "https://github.com/tamino-martinius/ui-snippets-starfield",
    ],
    media: [],
    skills: {
      html,
      js,
    },
  },

  {
    name: "Git Loading Animation",
    description: `
      A git-themed loading animation experiment.
    `,
    startsAt: new Date("2018-07-27"),
    endsAt: new Date("2018-07-27"),
    urls: [
      "https://github.com/tamino-martinius/ui-snippets-git-loading",
    ],
    media: [],
    skills: {
      svg,
      css,
      html,
    },
  },

  {
    name: "Checkbox Animations",
    description: `
      Custom animated checkbox designs.
    `,
    startsAt: new Date("2018-05-15"),
    endsAt: new Date("2018-05-18"),
    urls: [
      "https://github.com/tamino-martinius/ui-snippets-checkboxes",
    ],
    media: [],
    skills: {
      svg,
      ui,
      css,
      html,
    },
  },

  {
    name: "Radiobutton Animations",
    description: `
      Custom animated radiobutton designs.
    `,
    startsAt: new Date("2018-05-18"),
    endsAt: new Date("2018-05-18"),
    urls: [
      "https://github.com/tamino-martinius/ui-snippets-radiobuttons",
    ],
    media: [],
    skills: {
      svg,
      ui,
      css,
      html,
    },
  },

  {
    name: "After Effects/Blender Render",
    description: `
      Some of my dribbble shots are rendered with Blender and After Effects.
    `,
    startsAt: new Date("2014-05-30"),
    endsAt: new Date("2017-07-01"),
    urls: [
      "https://dribbble.com/shots/3536783-Rendered-cubes-landsape",
      "https://dribbble.com/shots/1625077-fluid-5",
      "https://dribbble.com/shots/1599550-Liquid-Germany",
      "https://dribbble.com/shots/1588162-Shop-Admin-Wireframe-WIP",
      "https://dribbble.com/shots/1581191-Cloud-Upload",
      "https://dribbble.com/shots/1575639-hello-dribbble",
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
    name: "Easemate",
    description: `
      Together with Aaron and Jakub we are building Easemate.
      A new and intuitive to generate complex and beautiful web animations.
      My core responsibility is to build the advanced packages like Particle, Physics and Metrics.
    `,
    startsAt: new Date("2025"),
    endsAt: undefined,
    urls: ["https://ease.dev/"],
    media: [],
    skills: {
      react,
      typescript,
      nodejs,
      css,
      svg,
    },
  },

  {
    name: "Lets Talk About",
    description: `
      I created the website lets-talk-about.io to quickly generate slides for presentations.
      The website is open source and available at GitHub [https://github.com/tamino-martinius/lets-talk-about].
      The website is built with React, TypeScript and is hosted as using Github pages.
    `,
    startsAt: new Date("2025"),
    endsAt: undefined,
    urls: ["https://www.lets-talk-about.io/", "https://npmjs.com/package/lets-talk-about"],
    media: [],
    skills: {
      react,
      typescript,
      nodejs,
      css,
      markdown,
      git,
    },
  },

  {
    name: "Central Icons",
    description: `
      Together with the iconists I build the Central Icons library and react packages.
    `,
    startsAt: new Date("2025"),
    endsAt: undefined,
    urls: ["https://centralicons.com/"],
    media: [],
    skills: {
      react,
      typescript,
      nodejs,
      css,
      svg,
      figma,
    },
  },

  {
    name: "Shorticons",
    description: `
      I created the website shorticons.com together with Andreas Storm and Martin David.
      This site contains a collection of icons which can be used for shortcuts on iOS and Android.
      The website is built with React, TypeScript. The icon collection later evolved to centralicons.com.
    `,
    startsAt: new Date("2020"),
    endsAt: new Date("2022"),
    urls: ["https://shorticons.com/", "https://x.com/shorticons"],
    media: [],
    skills: {
      react,
      typescript,
      nodejs,
      css,
      svg,
      ios,
      android,
    },
  },

  {
    name: "Hashflag Gallery",
    description: `
      I created the website hashflaggallery.com together with Andreas Storm.
      This site collects all static and animated Hashflags from Twitter and
      displayes them in a unique library. I'm responsibe for the whole
      Teach-Stack and Coding. Andreas is responsible for Design & Marketing.
    `,
    startsAt: new Date("2020-09-01"),
    endsAt: new Date("2025"),
    urls: [
      "https://hashflaggallery.com",
      "https://codepen.io/collection/DoJqWO",
      "https://twitter.com/HashflagGallery",
    ],
    media: [],
    skills: {
      beanstalk,
      redis,
      nodejs,
      react,
      scss,
    },
  },

  {
    name: "Check it done",
    description: `
      As a developer I created a lot of To-Do Apps (basically whenever i tried
      a new technology). I'm not completely happy with any To-Do app i tested
      and finally during Covid I started this project together with Andreas,
      Martin and Aaron. Andreas and Martin are the most talented designers i
      know and Aaron is a genius in user interaction and animation design.
      I'm responsible for the complete Tech-Stack including the UI basics.
    `,
    startsAt: new Date("2020-08-01"),
    endsAt: undefined,
    urls: ["https://usecheck.com", "https://twitter.com/joincheck"],
    media: [],
    skills: {
      beanstalk,
      redis,
      nodejs,
      react,
      scss,
    },
  },

  {
    name: "GitHub & NPM Metrics",
    description: `
      I published packages for github [https://github.com/tamino-martinius/node-get-all-github-contributions]
      and npm [https://github.com/tamino-martinius/node-get-all-npm-contributions]
      to get all my GitHub and npm contributions.
      Additional there are github repositories which have a cron and an encrypred
      storage to regularly fetch the data and store it in a database.
      Finally there is a website which displays the metrics in a beautiful way.
      All data can be watched at [metrics.tamino.dev].
    `,
    startsAt: new Date("2017"),
    endsAt: undefined,
    urls: [
      "https://metrics.tamino.dev/",
      "https://dribbble.com/shots/4884965-GitHub-Contribution-Visualization",
      "https://github.com/tamino-martinius/metrics.tamino.dev",
      "https://github.com/tamino-martinius/node-get-all-github-contributions",
      "https://github.com/tamino-martinius/node-get-all-npm-contributions",
      "https://github.com/tamino-martinius/github-stats",
      "https://github.com/tamino-martinius/npm-stats",
    ],
    media: [],
    skills: {
      s3,
      cloudfront,
      nodejs,
      lambda,
      typescript,
      react,
      vite,
      git,
    },
  },

  {
    name: "Squoint",
    description: `
      Squoint is a puzzle game which is optimized for mobile devices and touch
      gestures.
    `,
    startsAt: new Date("2017"),
    endsAt: new Date("2020"),
    urls: ["https://squoint.com"],
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
    name: "Colourcode",
    description: `
      Colourcode was created to make my life easier to create Websites for my
      customers. With colourcode i was able to find quickly new color schemes
      which match to the corporate identity of my clients.
      This project got aquired by TopTal in 2020.
    `,
    startsAt: new Date("2013"),
    endsAt: new Date("2020"),
    urls: ["https://colourco.de/", "https://github.com/tamino-martinius/colourco.de"],
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
    name: "NextParticle",
    description: `
      NextParticle is the evolution of ParticleSlider. It's a complete rewrite
      of the code to improve the performance and make it easier to customize for
      the customers. The markup based initialization made it easier to create
      a wordpress plugin.
    `,
    startsAt: new Date("2017"),
    endsAt: new Date("2025"),
    urls: ["https://nextparticle.nextco.de/"],
    media: [],
    skills: {
      s3,
      cloudfront,
      lambda,
      nodejs,
      psql,
      typescript,
      php,
      html,
      stylus,
      vuejs,
    },
  },

  {
    name: "GetShares",
    description: `
      GetShares is created to track you social media counts on all common
      social networks around the globe. It is also possible to create a unified
      look of all social media buttons.
    `,
    startsAt: new Date("2014"),
    endsAt: new Date("2017"),
    urls: [
      "http://www.getshar.es/",
      "https://github.com/tamino-martinius/www.getshar.es",
      "https://github.com/tamino-martinius/api.getshar.es",
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
    name: "ParticleSlider",
    description: `
      ParticleSlider is created based on my research of Particle effect
      rendering on a 2d canvas. It's possible to create amazing Particle
      Effects based on simple png images. ParticleSlider is discontinued
      since NextParticle is now available. All customers of ParticleSlider
      a version of NextParticle for free.
    `,
    startsAt: new Date("2014"),
    endsAt: new Date("2017"),
    urls: ["https://nextparticle.nextco.de/", "http://particleslider.de/"],
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
    name: "Iary",
    description: `
      Iary is a time tracking and reporting solution build as Web Application.
      It was discontinued in favor of my work at shyftplan. All customers got
      a complete refund.
    `,
    startsAt: new Date("2014"),
    endsAt: new Date("2017"),
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
      mongodb,
      stylus,
      websockets,
    },
  },

  {
    name: "Butlr",
    description: `
      Butlr is a automatically generated city guide for all cities in Germany.
      It shows all Points of Interrest, Restaurants, etc. based on a enriched
      database build on GeoDB. This project is discontinued with GeoDB.
    `,
    startsAt: new Date("2013"),
    endsAt: new Date("2014"),
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
    name: "GeoDB",
    description: `
      GeoDB is a web scraper which is searching for all addresses and their
      geo coordinates in germany. The data is used on auto completes for
      Webpages. This project is discontinued becasue it has too high costs
      for a Website which generates no income.
    `,
    startsAt: new Date("2012"),
    endsAt: new Date("2014"),
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
    name: "Lets talk about ... New JavaScript Features (2020 Editon)",
    description: `
      A yearly overview what happened in JavaScript and whats on the
      early stages of ECMAScript. An small into to interesting new functions.
    `,
    startsAt: new Date("2020"),
    endsAt: new Date("2020"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--new-js-features--2020",
      "https://new-js-features--2020-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      js,
      nodejs,
      markdown,
    },
  },

  {
    name: "Lets talk about ... AWS CDK (Cloud Development Kit)",
    description: `
      An introduction in the alternative to CloudFormation templates.
      Create your infrastructure stacks with code.
    `,
    startsAt: new Date("2019"),
    endsAt: new Date("2019"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--cdk",
      "https://cdk-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
      cloudformation,
      lambda,
      markdown,
    },
  },

  {
    name: "Lets talk about ... New JavaScript Features (2019 Editon)",
    description: `
      A yearly overview what happened in JavaScript and whats on the
      early stages of ECMAScript. An small into to interesting new functions.
    `,
    startsAt: new Date("2019"),
    endsAt: new Date("2019"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--new-js-features--2019",
      "https://new-js-features--2019-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      js,
      nodejs,
      markdown,
    },
  },

  {
    name: "Lets talk about ... SAM (Serverless Access Model)",
    description: `
      An introduction to the Tooling and concept of Serverless
      Applications within AWS.
    `,
    startsAt: new Date("2018"),
    endsAt: new Date("2018"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--sam",
      "https://sam-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      nodejs,
      lambda,
      apigateway,
      cloudformation,
      markdown,
    },
  },

  {
    name: "Lets talk about ... API (of shyftplan)",
    description: `
      A short introduction of APIs in general and the models of shyftplan in
      specific. This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date("2018"),
    endsAt: new Date("2018"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--api",
      "https://api-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      api,
      nodejs,
      markdown,
    },
  },

  {
    name: "Lets talk about ... New JavaScript Features (2018 Editon)",
    description: `
      A yearly overview what happened in JavaScript and whats on the
      early stages of ECMAScript. An small into to interesting new functions.
    `,
    startsAt: new Date("2018"),
    endsAt: new Date("2018"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--new-js-features--2018",
      "https://new-js-features--2018-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      js,
      nodejs,
      markdown,
    },
  },

  {
    name: "Lets talk about ... SQL Query Performance",
    description: `
      A small guide in writing good and performant SQL Queries which give very
      responsed even with millions of records. I also explain why/when a database
      index is useful and which one i should use.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date("2018"),
    endsAt: new Date("2018"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--sql-query-performance",
      "https://sql-query-performance-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      psql,
      nodejs,
      markdown,
    },
  },

  {
    name: "Lets talk about ... Never Change a Running System",
    description: `
      A talk about the importance of not changing a running system.
      The talk is about introducing scrum and agile development to the team.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date("2018"),
    endsAt: new Date("2018"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--never-change-a-running-system",
      "https://never-change-a-running-system-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      teamlead,
      technicalLead,
      markdown,
    },
  },

  {
    name: "Lets talk about ... API Workshop",
    description: `
      A workshop in building an API with AWS API Gateway and Lambda.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date("2018"),
    endsAt: new Date("2018"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--api-workshop-1",
      "https://api-workshop-1-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      api,
      apigateway,
      lambda,
      nodejs,
      markdown,
    },
  },

  {
    name: "Lets talk about ... GraphQL",
    description: `
      When should i use GraphlQL and what are the differences to REST and how
      does a GraphQL API look like from the Consumers and Developers perspective.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date("2017"),
    endsAt: new Date("2017"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--graphql",
      "https://graphql-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      gql,
      nodejs,
      markdown,
    },
  },

  {
    name: "Lets talk about ... TypeScript",
    description: `
      A quick introduction to TypeScript and its differenced to JavaScript.
      This Talk was a internal presentation for shyftplan.
    `,
    startsAt: new Date("2017"),
    endsAt: new Date("2017"),
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--typescript",
      "https://typescript-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      typescript,
      nodejs,
      markdown,
    },
  },

  {
    name: "Lets talk about ... Example",
    description: `
      A example slides. Thats my base branch with which i create
      my slides for presentations.
    `,
    startsAt: new Date("2017"),
    endsAt: undefined,
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--example",
      "https://example-lets-talk-about.tamino.dev",
    ],
    media: [],
    skills: {
      nodejs,
      markdown,
    },
  },
];

/***********
 * Packages *
 ***********/

export const packages: ShowCase[] = [
  {
    name: "Get all npm Contributions",
    description: `
      Get all npm contributions and download statistics for a given user.
    `,
    startsAt: new Date("2026"),
    endsAt: undefined,
    urls: [
      "https://github.com/tamino-martinius/node-get-all-npm-contributions",
      "https://www.npmjs.com/package/get-all-npm-contributions",
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
      api,
    },
  },

  {
    name: "Get all GitHub Contributions",
    description: `
      Get all GitHub contributions for a given user using the GitHub GraphQL API.
    `,
    startsAt: new Date("2026"),
    endsAt: undefined,
    urls: [
      "https://github.com/tamino-martinius/node-get-all-github-contributions",
      "https://www.npmjs.com/package/get-all-github-contributions",
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
      gql,
      api,
    },
  },

  {
    name: "Lets talk about",
    description: `
      Easily create slides from Markdown. Customize your slides with HTML and CSS.
      Host your slides for free on GitHub Pages.
    `,
    startsAt: new Date("2026"),
    endsAt: undefined,
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about",
      "https://www.npmjs.com/package/lets-talk-about",
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
      markdown,
      html,
      css,
    },
  },

  {
    name: "Central Icons React",
    description: `
      A comprehensive collection of professionally designed React icons featuring
      customizable styles including round and square shapes, filled and outlined
      variants, multiple stroke widths, and corner radius options.
    `,
    startsAt: new Date("2025"),
    endsAt: undefined,
    urls: ["https://www.npmjs.com/package/@central-icons-react/all", "https://iconists.co/central"],
    media: [],
    skills: {
      react,
      typescript,
      nodejs,
      svg,
    },
  },

  {
    name: "Central Icons React Native",
    description: `
      A collection of professionally designed React Native / Expo icons with
      customizable styles including round and square shapes, filled and outlined
      variants, multiple stroke widths, and corner radius options.
    `,
    startsAt: new Date("2025"),
    endsAt: undefined,
    urls: [
      "https://www.npmjs.com/package/@central-icons-react-native/square-outlined-radius-0-stroke-1",
      "https://iconists.co/central",
    ],
    media: [],
    skills: {
      react,
      typescript,
      nodejs,
      svg,
      ios,
      android,
    },
  },

  {
    name: "Nextcode Postgres Model",
    description: `
      Postgres model layer package with zero dependencies.
    `,
    startsAt: new Date("2018"),
    endsAt: new Date("2018"),
    urls: [
      "https://github.com/tamino-martinius/node-pg-model",
      "https://www.npmjs.com/package/@nextcode/pg-model",
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
      psql,
    },
  },

  {
    name: "Nextcode Postgres Migrator",
    description: `
      Postgres migration packages with zero dependencies. Includes a base migrator,
      a PostgreSQL specific migrator, and a CLI for running migrations.
    `,
    startsAt: new Date("2018"),
    endsAt: new Date("2020"),
    urls: [
      "https://github.com/tamino-martinius/node-migrator",
      "https://github.com/tamino-martinius/node-pg-migrator",
      "https://www.npmjs.com/package/@nextcode/migrator",
      "https://www.npmjs.com/package/@nextcode/pg-migrator",
      "https://www.npmjs.com/package/@nextcode/postgres-migrator",
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
      psql,
    },
  },

  {
    name: "CDK Lambda Layers",
    description: `
      AWS CDK Lambda Layer constructs for Node.js. Provides pre-built layers
      for aws-sdk, postgres, and JWT packages.
    `,
    startsAt: new Date("2019"),
    endsAt: new Date("2020"),
    urls: [
      "https://github.com/tamino-martinius/cdk-lambda-layers--node-aws-sdk",
      "https://github.com/tamino-martinius/cdk-lambda-layers--node-postgres",
      "https://github.com/tamino-martinius/cdk-lambda-layers--node-jwt",
      "https://www.npmjs.com/package/@cdk-lambda-layers/node-aws-sdk",
      "https://www.npmjs.com/package/@cdk-lambda-layers/node-postgres",
      "https://www.npmjs.com/package/@cdk-lambda-layers/node-jwt",
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
      lambda,
      psql,
    },
  },

  {
    name: "ts-dedent",
    description: `
      TypeScript package which smartly trims and strips indentation from
      multi-line strings.
    `,
    startsAt: new Date("2018"),
    endsAt: undefined,
    urls: [
      "https://github.com/tamino-martinius/node-ts-dedent",
      "https://www.npmjs.com/package/ts-dedent",
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
    },
  },

  {
    name: "GitHub GraphQL API",
    description: `
      A node client for the GitHub GraphQL API with minimal dependencies
      created with TypeScript.
    `,
    startsAt: new Date("2018"),
    endsAt: new Date("2018"),
    urls: [
      "https://github.com/tamino-martinius/node-github-graphql-api",
      "https://www.npmjs.com/package/github-graphql-api",
    ],
    media: [],
    skills: {
      nodejs,
      typescript,
      gql,
      api,
    },
  },

  {
    name: "Lets talk about ... Template",
    description: `
      A template with example slides. Thats my base branch with which i create
      my slides for presentations.
    `,
    startsAt: new Date("2017"),
    endsAt: undefined,
    urls: [
      "https://github.com/tamino-martinius/lets-talk-about--template",
      "https://github.com/tamino-martinius/lets-talk-about--example",
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
    name: "Next Model",
    description: `
      Next Model is the evolution of Meteor Smart Record. With this package
      you are able to define Model relations and write database independend
      queries to fetch data.
    `,
    startsAt: new Date("2016"),
    endsAt: undefined,
    urls: [
      "https://github.com/tamino-martinius/node-next-model",
      "https://github.com/tamino-martinius/node-next-model-api-router",
      "https://github.com/tamino-martinius/node-next-model-knex-connector",
      "https://github.com/tamino-martinius/node-next-model-api-server-express",
      "https://github.com/tamino-martinius/node-next-model-local-storage-connector",
      "https://github.com/tamino-martinius/node-next-model-api-client-connector",
      "https://github.com/tamino-martinius/node-next-model-data-api-connector",
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
    name: "Meteor Smart Record",
    description: `
      Meteor Smart Record is a package to define Model relations and write
      MongoDB queries in a simple and object orientated way. It's a dependency
      for Meteor Smart Form which is a simple way to create forms based on models.
      This pacakge is discontinued on favor of Next Model which is a Meteor
      independent solution.
    `,
    startsAt: new Date("2015"),
    endsAt: new Date("2017"),
    urls: [
      "https://github.com/tamino-martinius/meteor-smart-record",
      "https://github.com/tamino-martinius/meteor-smart-form",
      "https://github.com/tamino-martinius/meteor-smart-form-delete-button",
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
    name: "Meteor ics",
    description: `
      A iCalendar .ics export which also enabled to integrate recurring events.
    `,
    startsAt: new Date("2015"),
    endsAt: new Date("2015"),
    urls: ["https://github.com/tamino-martinius/meteor-ics"],
    media: [],
    skills: {
      meteor,
      js,
    },
  },

  {
    name: "Meteor lazy Analytics",
    description: `
      This pacakge provides a non blocking way to integrate Google Analytics
      where the credentials are dynamically fetched from the Server.
    `,
    startsAt: new Date("2015"),
    endsAt: new Date("2015"),
    urls: ["https://github.com/tamino-martinius/meteor-lazy-analytics"],
    media: [],
    skills: {
      meteor,
      js,
    },
  },

  {
    name: "Meteor Method Pagination",
    description: `
      This pacakge is a easy way to integrate pagination of data with Meteor
      Server side methods..
    `,
    startsAt: new Date("2014"),
    endsAt: new Date("2014"),
    urls: ["https://github.com/tamino-martinius/meteor-method-pagination"],
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
    name: "RVM Docker Images",
    description: `
      This repository generates a rainbow table of Ubuntu versions and Ruby
      versions. The source is available on GitHub and the prebuild images
      are available on Docker Hub.
    `,
    startsAt: new Date("2017"),
    endsAt: new Date("2018"),
    urls: [
      "https://hub.docker.com/r/taminomartinius/rvm/",
      "https://github.com/tamino-martinius/docker-rvm",
    ],
    media: [],
    skills: {
      docker,
    },
  },

  {
    name: "VS Code Spacebars language",
    description: `
      This VS Code extension enables syntax highlighting of Meteors Spacebars
      language. Successor to the Atom package.
    `,
    startsAt: new Date("2018"),
    endsAt: new Date("2020"),
    urls: ["https://github.com/tamino-martinius/vscode-language-spacebars"],
    media: [],
    skills: {},
  },

  {
    name: "Atom Spacebars language",
    description: `
      This Atom package enables syntax highlighting of Meteors Spacebars language.
      Currently not maintained because i use VS Code now as main Editor.
    `,
    startsAt: new Date("2016"),
    endsAt: new Date("2016"),
    urls: ["https://github.com/tamino-martinius/atom-language-spacebars"],
    media: [],
    skills: {},
  },
];
