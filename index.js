const fs = require('node:fs');
const path = require('node:path');

function getAndRemoveNodeModules(source) {
  fs.promises.readdir(source, { withFileTypes: true })
    .then(dirContent => {
      const dirents = dirContent.filter(dir => (
        dir.isDirectory() && !dir.name.startsWith('.')
        ));
        
        dirents.forEach(dirent => {
          if (dirent.name === 'node_modules') {
          fs.rmSync(path.resolve(source, dirent.name), { recursive: true, force: true });
        } else {
          getAndRemoveNodeModules(path.resolve(source, dirent.name));
        }
      })
    });
}

getAndRemoveNodeModules(__dirname);
