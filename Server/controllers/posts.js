const path = require('path');
const Post = require('../models/Posts');
const User = require('../models/Users.js');

const createPost = async (req, res) => {
  try {
    const userID = req.user.user_id;
    const date_created = new Date();
    const {
      title, postBody, tag, category, address,
    } = req.body;
    Post.create(userID, title, category, tag, postBody, date_created, address);
    res.redirect('/forum');
  } catch (err) {
    res.status(500).json({
      error:
        'Internal Server Error: Could not create a Post. Please try again.',
    });
  }
};

const getUsersPosts = async (req, res) => {
  try {
    const userID = req.user.user_id;
    const result = await Post.getUsersPosts(userID);
    if (result.length === 0) {
      return res.json('There are no Posts yet.');
    }
    result.push(req.user.username);
    return res.send(result);
  } catch (err) {
    return res.status(500).json({
      error: 'Internal Server Error: Could not get all posts from the user.',
    });
  }
};
const getUserLikedPosts = async (req,res) =>{
  const userID = req.user.user_id;
  const data =  await Post.getUserLikedPosts(userID);
  res.send(data);
}

const getAllByUser = async (req, res) => {
  const userID = req.user.user_id;
  const data = await Post.getAllByUser(userID);
  res.send(data);
};

const getAllPosts = async (req, res) => {
  const data = await Post.getAll();
  res.send(data);
};
const getByID = async (req, res) => {
  const { postID } = req.params;
  const data = await Post.getByID(postID);
  res.send(await data);
};

const updatePosts = async (req, res) => {
  const postID = req.params.id;
  const userID = req.user_id;
  const {
    title, post_body, tag, location, category,
  } = req.body;
  try {
    await Post.updatePosts(
      userID,
      postID,
      title,
      post_body,
      tag,
      location,
      category,
    );
    return res.redirect('/forum');
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Internal Server Error: Post could not be updated.' });
  }
};
const addLike = async (req, res) => {
  const postID = req.params.id;
  Post.addLike(postID);
};

const deletePosts = (req, res) => {
  const postID = req.params.id;
  const userID = req.user_id;
  Post.deletePosts(userID, postID)
    .then(() => res.redirect('/'))
    .catch(() => res
      .status(500)
      .json({ error: 'Internal Server Error: Post could not be deleted.' }));
};
const createComment = async (req, res) => {
  const userID = req.user.user_id;
  const author = req.user.username;
  const date_created = new Date();
  const { comment } = req.body;
  const body = comment[0];
  const postID = comment[1];
  const postUserId =comment[2];
  Post.createComment(userID, author, postID, body, date_created);
  res.redirect(`/viewPost/${postID}/${postUserId}`);
};
const getComments = async (req, res) => {
  const postID = req.params.id;
  const data = await Post.getComments(postID);
  res.send(data);
};
const updateComment = async (req, res) => {
  const commentID = req.params.id;
  const userID = req.user.user_id;
  const { comment } = req.body;
  Post.updateComment(userID, commentID, comment);
};

const deleteComment = async (req, res) => {
  const postID = req.params.id;
  const userID = req.user.user_id;
  Post.deleteComment(userID, postID)
    .then(() => res.redirect(`/viewPost/${postID}`))
    .catch(() => {
      res
        .status(500)
        .json({ error: 'Internal Server Error: Comment could not be deleted' });
    });
};

module.exports = {
  createPost,
  createComment,
  getAllPosts,
  addLike,
  getComments,
  getUsersPosts,
  getByID,
  getAllByUser,
  getUserLikedPosts,
  updatePosts,
  updateComment,
  deletePosts,
  deleteComment,
};
