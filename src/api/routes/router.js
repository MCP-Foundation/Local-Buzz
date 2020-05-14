const express = require('express');
const cookieParser = require('cookie-parser');
const auth = require('../controllers/auth.js');

const router = express.Router();

router.use(cookieParser());
router.use()
router.get('/', () => {
  res.send('Hello World');
});

/**  GET'S **/
router.get('/', /* */)

/** POST'S **/

router.post('/register', /* userController.register */)
router.post('/login', /* userController.login */)
router.post('/posts/:postId');

/** PUT'S **/

/** DELETE'S **/


router.delete('/events/:id', /* PostController.delete */);