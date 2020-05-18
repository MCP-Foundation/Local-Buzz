const express = require('express');
const cookieParser = require('cookie-parser');
const userController = require('../controllers/users');
const postController = require('../controllers/posts');
const auth = require('../controllers/auth.js');

const router = express.Router();
router.use(cookieParser());

// Remember to compartmentalize file structure.

// /**  GET'S **/
router.get('/', (req, res) => res.send('hey this works'));
router.get('/users', (req, res) => userController.getAll()); // functions, may have to invoke.
router.get('/posts', (req, res) => postController.getAllPosts);
router.get('logout', (req, res) => userController.logout);

// /** POST'S **/
router.post('/register', userController.register);
router.post('/login', (req, res) => userController.login);
router.post('/posts', (req, res) => postController.create);
router.post('/posts/:postId');

// /** PUT'S **/
// router.put('/users/:userId', userController.update);
router.put('/posts/:postId', postController.update);

/** DELETE'S **/
router.delete('/users/:userId', userController.delete);
router.delete('/posts/:postId', PostController.delete);

module.exports = router;
