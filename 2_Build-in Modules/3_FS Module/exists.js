const fs = require('fs');
//check file exists or not
fs.exists('test.txt', (result) => {
  if (result) {
    console.log('File Found');
  } else {
    console.log('File not Found');
  }
});
