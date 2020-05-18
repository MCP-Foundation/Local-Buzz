const Post = require('../models/Posts');
const path = require('path');

const createPost =  async (req,res) =>{
	try{
		const userID = req.user_id
		const location = req.user.state
		const { title, post_body, tag, category} = req.body
		Post.createPost(userID , title, post_body, tag, location, category)
		res.redirect('/')
	} catch(err)  {
		res.status(500).json({ error: 'Internal Server Error: Could not create a Post. Please try again.' })
	}
}

const getUsersPosts = async (req, res) => {
	try {
		const userId = req.user_id
		const result = await Post.getUsersPosts(userId)
		if (result.length === 0) {
			return res.json('There are no Posts yet.')
		}
		result.push(req.user.username)
		return res.send(result)
	} catch (err) {
		return res.status(500).json({ error: 'Internal Server Error: Could not get all posts from the user.' })
	}
}

const updatePosts = async (req, res) => {
	const postID = req.params.id
	const userId = req.user_id
	const {title, post_body, tag, location, category} = req.body
	try {
		await Post.updatePosts(userId, postID, title, post_body, tag, location, category)
		return res.redirect('/')
	} catch (err) {
		return res.status(500).json({ error: 'Internal Server Error: Post could not be updated.' })
	}
}

const deletePosts = (req, res) => {
	const postId = req.params.id
	const userId = req.user_id
	Post.deletePosts(userId,postId)
		.then(() => res.redirect('/'))
		.catch(() => res.status(500).json({ error: 'Internal Server Error: Post could not be deleted.' }))
}
const getAllPosts = async (req, res) =>{
	const posts = await Post.getAllPosts()
	res.send(posts)
}
module.exports ={
	createPost,
	updatePosts,
	getAllPosts,
	getUsersPosts,
	deletePosts
}