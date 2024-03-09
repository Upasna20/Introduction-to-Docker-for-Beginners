const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World! This is Introduction to Docker for Beginners.');
});



// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
