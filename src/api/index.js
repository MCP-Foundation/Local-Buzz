const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const router = require('./routes/router.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`API Server is running on ${port}`))