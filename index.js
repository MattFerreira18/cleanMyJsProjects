const fs = require('node:fs');
const path = require('node:path');

const getDirentsInCurrDir = (dirSource, callback) =>
  fs.promises.readdir(dirSource, { withFileTypes: true })
    .then(dirContent => dirContent.filter(isValidDir))
    .then(callback);

const getDirSource = (source, dirent) => path.resolve(source, dirent.name);

const isNodeModules = (dirent) => dirent.name === 'node_modules';

const isValidDir = (dirent) =>
  dirent.isDirectory() && !dirent.name.startsWith('.');

const removeDir = (dirSource) =>
  fs.rmSync(dirSource, { recursive: true, force: true });

function searchAndDelNodeModules(source) {
  getDirentsInCurrDir(source, (dirents) => {
    dirents.forEach(dirent => {
      return isNodeModules(dirent) 
      ? removeDir(getDirSource(source, dirent)) 
      : searchAndDelNodeModules(getDirSource(source, dirent));
    });
  });
}

searchAndDelNodeModules(__dirname);
