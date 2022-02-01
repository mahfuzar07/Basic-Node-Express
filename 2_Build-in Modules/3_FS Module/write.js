const fs = require('fs');
//write file
const testObj = {
  name: 'Mahfuzar',
  email: 'mahfuzar@gmail.com',
  address: {
    city: 'Rajshahi',
    country: 'Bangladesh',
  },
};

const data = JSON.stringify(testObj);
fs.writeFile('./test.json', data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file write successful');
  }
});

fs.writeFile('./test.txt', 'My name is Mahfuzar Rahman', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('file write successful');
  }
});
