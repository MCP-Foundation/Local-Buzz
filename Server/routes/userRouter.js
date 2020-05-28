const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const userController = require('../controllers/Users');
const postController = require('../controllers/Posts');
const bodyParser = require('body-parser');

const userRouter = express.Router();
userRouter.use(cookieParser());
userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: true }));
userRouter.use(cookieParser());

userRouter.get('/api/user/:id', userController.getUserById);
userRouter.get('/api/userObj', userController.authenticate, userController.getUser);
userRouter.post('/api/register', userController.register);
userRouter.post('/api/login', userController.login);
userRouter.post('/api/logout', userController.logout);

module.exports = userRouter;