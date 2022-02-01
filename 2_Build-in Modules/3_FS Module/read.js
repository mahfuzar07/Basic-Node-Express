const fs = require('fs');
//read file system
fs.readFile('test.txt', 'utf-8', (err, data) => {
  //readFile fun(file name,encoading,(error and data))
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
//-------------or---------------
//without unicode
fs.readFile('test.txt', (err, data) => {
  //readFile fun(file name,(error and data))
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
