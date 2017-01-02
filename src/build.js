'use strict';

const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer();
const fs = require('fs-then-native');
const Path = require('path');
const exec = require('child-process-promise').exec;
const stylus = require('stylus');
const CleanCSS = require('clean-css');
const DataURI = require('datauri').promise;
const SVGO = require('svgo');
const svgo = new SVGO({
  removeTitle: true,
});

const htmlOutputPath = Path.resolve('lib/index.html');
const styleSrcPath = Path.resolve('src/style/main.styl');

const renderLayout = function(styleContent, imagesContent, iconsContent, vendorScriptContent, scriptContent) {
  return new Promise(function(resolve, reject) {
    for (const key in require.cache) { delete require.cache[key]; }
    const layout = require('./views/layout');
    const page = new Vue({
      components: {
        layout,
      },
      data: function() {
        return {
          styleContent,
          imagesContent,
          iconsContent,
          vendorScriptContent,
          scriptContent,
        };
      },
      template: `<layout
        :style-content="styleContent"
        :images-content="imagesContent"
        :icons-content="iconsContent"
        :vendor-script-content="vendorScriptContent"
        :script-content="scriptContent"
      ></layout>`,
    });
    renderer.renderToString(page, function (err, html) {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
};

const getPaths = function(dir, filter) {
  return fs.readdir(dir).then(files => {
    const fileStats = files.map(file => {
      return new Promise(function(resolve, reject) {
        const path = Path.resolve(dir, file);
        fs.stat(path, function(err, stat) {
          if (err) {
            reject(err);
          } else {
            const isDirectory = stat.isDirectory();
            resolve({path, isDirectory});
          }
        });
      });
    });
    return Promise.all(fileStats);
  }).then(pathStats => new Promise(function(resolve, reject) {
    const directories = pathStats.filter(file => file.isDirectory);
    const result = pathStats
      .filter(file => !file.isDirectory)
      .map(file => file.path)
      .filter(filter);
    const filesPerDirectoryQueries = directories.map(dir =>
      getPaths(dir.path, filter)
    );
    Promise.all(filesPerDirectoryQueries).then(filesPerDirectory => {
      filesPerDirectory.forEach(files =>
        files.forEach(file => result.push(file))
      );
      resolve(result);
    }).catch(err => reject(err));
  })).catch(console.log);
};

const imageName = (path) => Path.basename(path).replace(Path.extname(path), '');
const getImages = function() {
  const imagesDir = Path.resolve('src/images') + '/';
  return getPaths(imagesDir, file => (
    [
      '.png',
      '.jpg',
      '.jpeg',
    ].indexOf(Path.extname(file)) >= 0
  )).then(imagePaths => {
    const imageQueries = imagePaths.map(imagePath => {
      const name = imageName(imagePath);
      return DataURI(imagePath).then(uri => ({name, uri}));
    });
    return Promise.all(imageQueries).then(images => {
      const imagesContent = {};
      images.forEach(image => (imagesContent[image.name] = image.uri));
      return `window.images = ${JSON.stringify(imagesContent)};`
    });
  });
};

const getIcons = function() {
  const iconsDir = Path.resolve('src/images') + '/';
  return getPaths(iconsDir, file => (
    ['.svg'].indexOf(Path.extname(file)) >= 0
  )).then(iconPaths => {
    const iconQueries = iconPaths.map(iconPath => {
      const name = imageName(iconPath);
      return new Promise(function(resolve, reject) {
        fs.readFile(iconPath, 'utf8').then(data => {
          svgo.optimize(data, function(minified) {
            const content = minified.data;
            resolve({name, content})
          });
        });
      });
    });
    return Promise.all(iconQueries).then(icons => {
      const iconsContent = {};
      icons.forEach(icon => (iconsContent[icon.name] = icon.content));
      return `window.icons = ${JSON.stringify(iconsContent)};`
    });
  });
};

const getVendorScripts = function() {
  const scriptsDir = Path.resolve('src/script') + '/';
  return getPaths(scriptsDir, file => (
    Path.basename(file) !== 'index.js' &&
    ['.js'].indexOf(Path.extname(file)) >= 0
  )).then(scriptPaths => {
    const scriptQueries = scriptPaths.map(scriptPath =>
      fs.readFile(scriptPath, 'utf8')
    );
    return Promise.all(scriptQueries).then(scripts => {
      return scripts.join();
    });
  });
};

const renderPage = function() {
  return Promise.all([
    renderStyle(),
    getImages(),
    getIcons(),
    getVendorScripts(),
    getScript(),
  ])
  .then(resources => renderLayout.apply(this, resources))
  .catch(console.log);
};

const getScript = () => fs.readFile('src/script/index.js', 'utf8');
const savePage = html => fs.writeFile(htmlOutputPath, html);
const processPage = () => renderPage().then(html => savePage(html));
const openPage = () => exec('open -a "Google Chrome" file://' + htmlOutputPath);
const reloadPage = () => exec('osascript reload_browser.scpt ' + htmlOutputPath);
const renderStyle = function() {
  return fs.readFile(styleSrcPath, 'utf8').then(rawStyle => {
    return new Promise(function(resolve, reject) {
      stylus(rawStyle).render(function(err, css) {
        if (err) {
          reject(err);
        } else {
          const minified = new CleanCSS().minify(css).styles;
          resolve(minified);
        }
      });
    });
  });
}

module.exports = {
  htmlOutputPath,
  styleSrcPath,
  getImages,
  renderPage,
  savePage,
  processPage,
  openPage,
  reloadPage,
  renderStyle,
  getPaths,
  getIcons,
  getScript,
};
