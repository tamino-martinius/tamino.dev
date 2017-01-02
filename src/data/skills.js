'use strict';

// AWS / Compute
const ebs =            { level: 0.9, name: 'Elastic Beanstalk' };
const ec2 =            { level: 0.9, name: 'Elastic Compute Cloud' };
const ecs =            { level: 0.8, name: 'Elastic Container Service' };
const lambda =         { level: 1.0, name: 'Lambda' };
// AWS / Data
const dynamodb =       { level: 0.8, name: 'DynamoDB' };
const rds =            { level: 1.0, name: 'Relational Database Service' };
const s3 =             { level: 1.0, name: 'Simple Storage Service' };
// AWS / Flow
const apigateway =     { level: 0.9, name: 'API Gateway' };
const cloudfront =     { level: 1.0, name: 'CloudFront' };
const r53 =            { level: 1.0, name: 'Route 53' };
const sns =            { level: 0.9, name: 'Simple Notification Service' };
// AWS / Management
const cloudformation = { level: 1.0, name: 'CloudFormation' };
const cloudtrail =     { level: 0.8, name: 'CloudTrail' };
const cloudwatch =     { level: 1.0, name: 'CloudWatch' };
const iam =            { level: 0.9, name: 'Identity and Access Management' };
// Backend / CI
const circleci =       { level: 0.8, name: 'CircleCI' };
const jasmine =        { level: 0.9, name: 'Jasmine' };
const jenkins =        { level: 0.9, name: 'Jenkins' };
const mocha =          { level: 1.0, name: 'Mocha' };
const rspec =          { level: 1.0, name: 'RSpec' };
const travis =         { level: 0.9, name: 'Travis CI' };
// Backend / Code
const asp =            { level: 0.8, name: 'ASP.net' };
const meteor =         { level: 1.0, name: 'Meteor' };
const nodejs =         { level: 1.0, name: 'Node.js' };
const rails =          { level: 1.0, name: 'Ruby on Rails' };
const ruby =           { level: 1.0, name: 'Ruby' };
// Backend / Data
const api =            { level: 1.0, name: 'API' };
const apollo =         { level: 1.0, name: 'Apollo GraphQL' };
const elasticsearch =  { level: 0.7, name: 'elasticsearch' };
const gql =            { level: 1.0, name: 'GraphQL' };
const mariadb =        { level: 0.8, name: 'MariaDB' };
const mongodb =        { level: 0.9, name: 'MongoDB' };
const mssql =          { level: 0.9, name: 'Microsoft SQL' };
const psql =           { level: 1.0, name: 'PostgreSQL' };
const redis =          { level: 0.8, name: 'Redis' };
// Backend / Deploy
const android =        { level: 0.8, name: 'Android' };
const cordova =        { level: 0.9, name: 'Apache Cordova' };
const docker =         { level: 0.9, name: 'Docker' };
const git =            { level: 1.0, name: 'Git' };
const heroku =         { level: 0.9, name: 'Heroku' };
const ios =            { level: 0.9, name: 'iOS' };
// Frontend / Logic
const backbone =       { level: 0.7, name: 'Backbone.js' };
const browserify =     { level: 0.8, name: 'Browserify' };
const jquery =         { level: 1.0, name: 'jQuery' };
const js =             { level: 1.0, name: 'JavaScript' };
// Frontend / Markup
const haml =           { level: 0.9, name: 'Haml' };
const handlebars =     { level: 1.0, name: 'Handlebars' };
const html =           { level: 1.0, name: 'HyperText Markup Language' };
const php =            { level: 0.7, name: 'PHP' };
const markdown =       { level: 0.9, name: 'Markdown' };
const react =          { level: 0.8, name: 'React' };
const vuejs =          { level: 1.0, name: 'Vue.js' };
// Frontend / Style
const css =            { level: 1.0, name: 'Cascading Style Sheets' };
const less =           { level: 0.9, name: 'less' };
const sass =           { level: 0.9, name: 'Sass' };
const stylus =         { level: 1.0, name: 'Stylus' };
const svg =            { level: 1.0, name: 'SVG' };
// Study
const distributedsys = { level: 0.7, name: 'Distributed Systems' };
const imageprocessing ={ level: 0.7, name: 'Image Processing' };
const math =           { level: 0.7, name: 'Math' };
const neuronalnetwork ={ level: 0.7, name: 'Neuronal Networks' };
const numeric =        { level: 0.7, name: 'Numeric' };
const parallelexec =   { level: 0.7, name: 'Parallel Execution' };

const all = {
  ebs, ec2, ecs, lambda,
  dynamodb, rds, s3,
  apigateway, cloudfront, r53, sns,
  cloudformation, cloudtrail, cloudwatch, iam,
  circleci, jasmine, jenkins, mocha, rspec, travis,
  asp, meteor, nodejs, rails, ruby,
  api, apollo, elasticsearch, gql, mariadb, mongodb, psql,
  android, cordova, docker, git, heroku, ios,
  backbone, browserify, jquery, js,
  haml, handlebars, html, php, markdown, react, vuejs,
  css, less, sass, stylus, svg,
  distributedsys, imageprocessing, math, neuronalnetwork, numeric,
};

const tree = {
  aws: {
    name: 'AWS',
    skills: {
      compute: {
        name: 'Compute',
        skills: { ebs, ec2, ecs, lambda },
      },
      data: {
        name: 'Data',
        skills: { dynamodb, rds, s3 },
      },
      flow: {
        name: 'Flow',
        skills: { apigateway, cloudfront, r53, sns },
      },
      management: {
        name: 'Management',
        skills: { cloudformation, cloudtrail, cloudwatch, iam },
      },
    },
  },
  backend: {
    name: 'Backend',
    skills: {
      ci: {
        name: 'CI',
        skills: { circleci, jasmine, jenkins, mocha, rspec, travis },
      },
      code: {
        name: 'Code',
        skills: { meteor, nodejs, rails, ruby },
      },
      data: {
        name: 'Data',
        skills: { apollo, gql, mariadb, mongodb, psql },
      },
      deploy: {
        name: 'Deploy',
        skills: { cordova, docker, git, heroku },
      },
    },
  },
  frontend: {
    name: 'Frontend',
    skills: {
      logic: {
        name: 'Logic',
        skills: { browserify, jquery, js },
      },
      markup: {
        name: 'Markup',
        skills: { haml, handlebars, html, react, vuejs },
      },
      style: {
        name: 'Style',
        skills: { css, less, sass, stylus },
      },
    },
  },
};

module.exports = {all, tree};
for (const key in all) module.exports[key] = all[key];
