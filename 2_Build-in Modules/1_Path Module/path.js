const path = require('path');

//working current file location
const myCurrentPath = __filename;
console.log(myCurrentPath);

console.log(path.basename(myCurrentPath)); // current file name
console.log(path.extname(myCurrentPath)); // current file extention name

//path format Object

const pathObject = {
  root: '/',
  dir: 'user',
  name: 'testFile',
  ext: '.txt',
};
console.log(path.format(pathObject));

//The path.parse() method returns an object whose properties represent significant elements of the path
console.log(path.parse(myCurrentPath));
