const express = require('express');

const rateLimiter = require('./rateLimiter');

const taskHandler = require('./taskHandler');


const app = express();
app.use(express.json());

app.post('/task', rateLimiter, taskHandler);

app.listen(3000, () => {
  console.log('API server running on port 3000');
});
