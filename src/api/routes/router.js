const express = require('express');
const cookieParser = require('cookie-parser');
const userController = require('./controllers/auth')
const postController = require('./controllers/posts')

const router = express.Router();

router.use(cookieParser());
router.use(auth);

/**  GET'S **/
router.get('/', /* */);
router.get('/logout', /* userController.logout */);
router.get('users', /* userController.getAllUsers */)
router.get('/posts' /* postController.getAllPosts */)
router.get('logout', /* userController.logout + React Route change ? */)
// router.get('/home', userController)


/** POST'S **/
router.post('/register', /* userController.register */)
router.post('/login', /* userController.login */)
router.post('/posts', /* postController.create */)
router.post('/posts/:postId');


/** PUT'S **/
router.put('/users/:userId', /* userController.update */)
router.put('/posts/:postId', /* postController.update */)

/** DELETE'S **/
router.delete('/users/:userId', /* userController.delete */)
router.delete('/posts/:id', /* PostController.delete */);