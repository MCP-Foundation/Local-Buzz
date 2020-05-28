const Likes = require('../models/Likes');

const getLikesByPostId = async (req, res) => {
  const { id } = req.params;
  const data = await Likes.getByPostId(id);
  return res.status(200).json(data);
};
const addLike = async (req, res) => {
  const { user_id, post_id } = req.params;
  const data = await Likes.add(user_id, post_id);
  return res.status(200).json(data);
};
const removeLike = async (req, res) => {
  const { user_id, post_id } = req.params;

  const data = await Likes.remove(user_id, post_id);
  return res.status(200).json(data);
};

module.exports = {
  getLikesByPostId,
  addLike,
  removeLike,
};
