const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/router.js');
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

// app.get('/hey', (req, res)=> {
//   res.send('Bigngooo');
// })

app.listen(port, () => console.log(`API Server is running on ${port}`))