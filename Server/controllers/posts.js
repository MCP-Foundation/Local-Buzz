const Post = require('../models/Posts');
const path = require('path');

const createPost = async (req, res) => {
  try {
    const userID = req.user.user_id;
    const date_created = new Date();
    const { title, postBody, tag, category, address } = req.body;
    Post.create(userID, title, category, tag, postBody, date_created, address);
    res.redirect('/');
  } catch (err) {
    res.status(500).json({
      error:
        'Internal Server Error: Could not create a Post. Please try again.',
    });
  }
};

const getUsersPosts = async (req, res) => {
  try {
    const userId = req.user_id;
    const result = await Post.getUsersPosts(userId);
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
const getAllByUser = async (req, res) => {
  const userId = req.user.user_id;
  const data = await Post.getAllByUser(userId);
  console.log(data);
  res.send(data)
};

const getAllPosts = async (req, res) => {
  const data = await Post.getAll();
  console.log(data);
  res.send(data)
};
const getById = async (req,res) =>{
  const postID = req.params.id;
  const data = await Post.getById(postId);
  console.log(data)
  res.send(data)
}

const updatePosts = async (req, res) => {
  const postID = req.params.id;
  const userID = req.user_id;
  const { title, post_body, tag, location, category } = req.body;
  try {
    await Post.updatePosts(
      userID,
      postID,
      title,
      post_body,
      tag,
      location,
      category
    );
    return res.redirect('/');
  } catch (err) {
    return res
      .status(500)
      .json({ error: 'Internal Server Error: Post could not be updated.' });
  }
};
const addLike = async (req, res) => {
  const postID = req.params.id;
  Post.addLike(postID)
};

const deletePosts = (req, res) => {
  const postID = req.params.id;
  const userID = req.user_id;
  Post.deletePosts(userID, postID)
    .then(() => res.redirect('/'))
    .catch(() =>
      res
        .status(500)
        .json({ error: 'Internal Server Error: Post could not be deleted.' })
    );
};
const createComment = async (req,res) =>{
  const userID= req.user_id;
  const {comment} = req.body;
  Post.createComment(userID,author,postID,comment)
  res.redirect('/')
}
const getComments = async (req,res) =>{
  const data = await Post.getComments();
  console.log(data)
  res.send(data)
}
const updateComment = async (req,res) =>{
  const commentID = req.params.id;
  const userID = req.user_id;
  const {comment} = req.body;
  Post.updateComment(userID,commentID,comment)
}

const deleteComment = async (req,res) =>{
  const postID = req.params.id;
  const userID = req.user_id;
  Post.deleteComment(userID,postID)
    .then(()=> res.redirect('/'))
    .catch(()=>{
      res
        .status((500))
        .json({error:'Internal Server Error: Comment could not be deleted'})
    })
}


module.exports = {
  createPost,
  createComment,
  getAllPosts,
  addLike,
  getComments,
  getUsersPosts,
  getById,
  getAllByUser,
  updatePosts,
  updateComment,
  deletePosts,
  deleteComment
};
