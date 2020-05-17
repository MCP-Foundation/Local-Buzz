const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/Users').default

const createUser = (req, res) => {
	const { name, username, email, password, address } = req.body

	const saltRounds = 8
	bcrypt.hash(password, saltRounds)
		.then((hashedPassword) => {
			User.create(name, username, email, password, address)
			return jwt.sign({
				username,
				email,
				password,
				exp: Math.floor(Date.now() / 1000) + (15 * 60),
			}, 'Do Not Open', (err, encryptedPayload) => {
				res.cookie('userToken', encryptedPayload, { httpOnly: true })
				// res.redirect('/login')
			})
		})
		.catch((err) => {
			res.send(err)
		})
}

const authenticate = async(req, res, next) => {
	const token = req.cookies.userToken
  
	if (!token) {
		return res.status(401).send('Only logged in users can access this page.')
	}
	const payload = await jwt.verify(token, 'Do Not Open', (err, decoded) =>{
		if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' })
		return decoded
	})
  
	const { email, password } = payload
	try {
		const user = await User.getByEmail(email)

		if (!user) {
			return res.status(403).send('Unauthorized User: User does not exist.')
		}
    
		req.userId = user.user_id
		req.user = user
		
		const isValidPassword = await bcrypt.compare(password, user.hashed_password)

		if (isValidPassword) {
			return next()
		}

		return res.status(403).send('Unauthorized User: Try logging in again.')
	}
	catch (err) {
		return res.send(err)
	}
}

const verifyUser = async(req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.getByEmail(email)
		if (!user) {
			return res.status(403).send('User does not exist.')
		}

		req.body.userId = user.user_id

		const isValidPassword = await bcrypt.compare(password, user.hashed_password)

		if (isValidPassword) {
			return jwt.sign({
				userId: user.user_id,
				email,
				password,
				expiresIn: '1h',
			}, 'Do Not Open', (err, encryptedPayload) => {
				res.cookie('userToken', encryptedPayload, { httpOnly: true })
				// res.redirect('/home')
			})
		}

		return res.status(403).send('Email or password is incorrect.')
	}
	catch (err) {
		return res.send(err)
	}
}