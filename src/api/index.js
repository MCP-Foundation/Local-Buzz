const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`API Server is running on ${port}`))