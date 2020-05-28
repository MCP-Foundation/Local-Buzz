const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const userController = require('../controllers/Users');
const postController = require('../controllers/Posts');
const likesController = require('../controllers/likes');
const bodyParser = require('body-parser');

const likesRouter = express.Router();
likesRouter.use(cookieParser());

likesRouter.use(bodyParser.json());
likesRouter.use(bodyParser.urlencoded({ extended: true }));
likesRouter.use(cookieParser());

likesRouter.get('/api/likes/:id', likesController.getLikesByPostId);
likesRouter.post('/api/like/:post_id/:user_id', likesController.addLike);
likesRouter.post('/api/unlike/:post_id/:user_id', likesController.removeLike);

module.exports = likesRouter;
