const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const { PROJECTS_DIR_ENTRYPOINT } = require('./.env.json');

const HOME_DIR_ALIAS = '$HOME';

const getAllAfterASubstring = (str, substr) =>
  str.substring(str.indexOf(substr) + substr.length)

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

const sanitizeEntrypoint = (entrypoint) =>
  entrypoint.includes(HOME_DIR_ALIAS)
    ? `${os.homedir}${getAllAfterASubstring(entrypoint, HOME_DIR_ALIAS)}`
    : entrypoint;

function searchAndDelNodeModules(source) {
  console.log('STARTING PROCESS TO REMOVE ALL `NODE_MODULES`');

  getDirentsInCurrDir(source, (dirents) => {
    dirents.forEach(dirent => {
      return isNodeModules(dirent)
        ? removeDir(getDirSource(source, dirent))
        : searchAndDelNodeModules(getDirSource(source, dirent));
    });

    console.log('FINISHED PROCESS');
  });
}

const entrypoint = PROJECTS_DIR_ENTRYPOINT 
  ? sanitizeEntrypoint(PROJECTS_DIR_ENTRYPOINT)
  : __dirname;

searchAndDelNodeModules(entrypoint);
