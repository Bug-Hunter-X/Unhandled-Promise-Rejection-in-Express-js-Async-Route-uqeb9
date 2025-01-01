const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(err => {
    // Error handling is missing here!
    console.error('Error:', err); // This only logs the error
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a random error
    const randomError = Math.random() < 0.5;
    if (randomError) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});