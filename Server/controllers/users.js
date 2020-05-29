const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('../models/Users.js');

const register = (req, res) => {
  const {
    name, username, email, password, address, avatar,
  } = req.body;
  const bio = '';
  const saltRounds = 8;
  bcrypt
    .hash(password, saltRounds)
    .then((hashedPassword) => {
      User.create(name, username, bio, email, hashedPassword, address, avatar);
      return jwt.sign(
        {
          username,
          email,
          password,
          exp: Math.floor(Date.now() / 420000) + 15 * 60,
        },
        'Do Not Open',
        (err, encryptedPayload) => {
          res.cookie('userToken', encryptedPayload, { httpOnly: true });
          res.redirect('/login');
        },
      );
    })
    .catch((err) => {
      res.send(err);
    });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.getByEmail(email);
    if (!user) {
      return res.status(401).redirect('/login');
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(404).redirect('/login');
    }
    const payload = {
      email,
      password,
      userId: user.id,
      expiresIn: '1hr',
    };
    return jwt.sign(payload, 'secret', (err, encryptedPayload) => {
      if (err) {
        res.status(500).send(err);
      }
      res.cookie('userToken', encryptedPayload);
      res.redirect('/forum');
    });
  } catch (err) {
    return res.send(err);
  }
};
const authenticate = async (req, res, next) => {
  if (!req.cookies.userToken) {
    // res.status(401);
    return res.status(401).redirect('/login');
  }
  try {
    const payload = await jwt.verify(req.cookies.userToken, 'secret');
    const { email, password } = payload;
    const user = await User.getByEmail(email);
    if (!user) {
      return res.status(401).send('Unauthorized User');
    }
    req.userId = user.user_id;
    req.user = user;
    const isVaildPassword = await bcrypt.compare(password, user.password);
    if (isVaildPassword) {
      return next();
    }
    return res.status(403).send('Unauthorized User');
  } catch (err) {
    return res.send(err);
  }
};
const getUser = async (req, res) => {
  try {
    const userId = req.userId
    const user = await User.getByID(userId)
    if (!user) throw Error('User Does Not Exist')
    res.status(200).send(JSON.stringify(user))
  } catch (err) {
    res.status(404).send(err)
  }
}
const getUserById = async (req, res) => {
  const userID = await req.params.id;
  const data = await User.getByID(userID);
  res.send(data);
};
const update = async (req, res) => {
  const userID = await req.user_id;
  const {
    name, username, email, password, address, bio, avatar,
  } = req.body;
  User.update(userID, name, username, email, password, address, bio, avatar);
};
const logout = (req, res) => {
  res.clearCookie('userToken');
  res.redirect('/forum');
};
module.exports = {
  login,
  logout,
  register,
  authenticate,
  update,
  getUser,
  getUserById,
};
