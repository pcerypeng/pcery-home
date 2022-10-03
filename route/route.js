var path = require('path')
var fs = require('fs')

function getRoutes () {
  const slidebar ={};
  const currentDirPath = '../docs/';
  const slideBar = ['study', 'about']
  const files =  fs.readdirSync(currentDirPath, 'utf-8');
  for (const file of files) {
    if(slideBar.includes(file)) {
      const path = `${currentDirPath + file}/`;
      const files =  fs.readdirSync(path, 'utf-8');
      const key = `/${file}/`;
      const items = [];
      files.forEach((file) => {
      })
      files
      slidebar[key] =[];
    }
  }
}
getRoutes();