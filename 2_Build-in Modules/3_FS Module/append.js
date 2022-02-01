const fs = require('fs');
//append file example file prev data + new data
fs.appendFile('test.txt', ' and i am a web app developer', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file data append successful');
  }
});
