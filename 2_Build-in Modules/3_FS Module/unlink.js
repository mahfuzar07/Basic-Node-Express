const fs = require('fs');
//delete file
fs.unlink('test2.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file delete successful');
  }
});
