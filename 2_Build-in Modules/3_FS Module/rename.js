const fs = require('fs');
//rename file name
fs.rename('test.txt', 'test2.txt', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file rename successful');
  }
});
