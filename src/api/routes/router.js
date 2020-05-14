const express = require('express');
const cookieParser = require('cookie-parser');

const router = express.Router();

router.use(cookieParser());

router.get('/', () => {

});