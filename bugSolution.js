const express = require('express');
const app = express();
const port = 3000;

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(next); // Pass the error to the error handling middleware
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
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