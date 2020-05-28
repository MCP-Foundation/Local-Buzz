const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter')
const postRouter = require('./routes/postRouter')
const likesRouter = require('./routes/likesRouter')
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRouter)
app.use(postRouter)
app.use(likesRouter);

app.listen(port, () => console.log(`API Server is running on ${port}`))