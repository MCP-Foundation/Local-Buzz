const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const User = require('../models/Users');

const register = (req, res) => {
  try {
    const {
      firstName, lastName, email, password,
    } = req.body;
    const saltRounds = 8;
    bcrypt.hash(password, saltRounds)
      .then((hashedPassword) => User.create(firstName, lastName, email, hashedPassword))
      .then(() => res.redirect('/login'));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// need to reload feature if the user wasn't found
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.getByEmail(email);

    if (!user) {
      return res.status(401).send('User not found.');
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.send('Incorrect Password.');
    }

    const payload = {
      email, password, userId: user.id, expiresIn: '2hr',
    };
    return jwt.sign(payload, 'secret', (err, encryptedPayload) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
      res.cookie('userToken', encryptedPayload);
      res.redirect('/home');
    });
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};


const authenticate = async (req, res, next) => {
  if (!req.cookies.userToken) {
    // res.status(401);
    return res.redirect('/login');
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
    console.log(err);
    return res.send(err);
  }
};

const logout = (req, res) => {
  res.clearCookie('userToken');
  // React direct with react router
};

module.exports = {
  login,
  logout,
  register,
  authenticate,
  getAll
};
