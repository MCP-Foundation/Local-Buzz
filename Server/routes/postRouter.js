const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const userController = require('../controllers/Users');
const postController = require('../controllers/Posts');
const bodyParser = require('body-parser');

const postRouter = express.Router();

postRouter.use(cookieParser());
postRouter.use(bodyParser.json());
postRouter.use(bodyParser.urlencoded({ extended: true }));
postRouter.use(cookieParser());


postRouter.get('/api/forum', postController.getAllPosts);
postRouter.get('/api/comments/:id', postController.getComments);
postRouter.get(
  '/api/user-posts',
  userController.authenticate,
  postController.getAllByUser
);
postRouter.get('/api/viewPost/:postID/:userID', postController.getByID);
postRouter.put('/api/posts/:postId', postController.updatePosts);
postRouter.delete('/api/posts/:postId', postController.deletePosts);

module.exports = postRouter;