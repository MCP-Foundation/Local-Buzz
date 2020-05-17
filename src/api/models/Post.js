const db = require('../db');

class Posts{
	static create(user_id,title,category,tag,post_body,location){
		const queryText = `INSERT INTO posts(title,category,tag,post_body,location) VALUES ($1,$2,$3,$4,$5)`
		return db.query(queryText, [title, category,tag, post_body,location])
	}
	static update(user_id,post_id, title,category,post_body,location){
    	const queryText = `UPDATE posts SET title = $3, category = $4, tag = $5, post_body = $6,location = $7
      		WHERE id = $1 AND post_id = $2;`;
		return db.query(queryText, [title, category, tag,post_body,location])
	}
	static delete(user_id,post_id){
		const queryText = `DELETE FROM posts WHERE user_id = $1 AND post_id = $2`
		return db.query(queryText,[user_id,post_id])
	}
	static get(user_id){
		const queryText = `SELECT * FROM posts WHERE user_id = $1`
		return db.query(queryText,[user_id])

	}
	static getAllPosts() {
		const queryText = 'SELECT * FROM posts;'
		return db.query(queryText)
			.then((data) => data.rows)
	}

}

module.exports = Posts;