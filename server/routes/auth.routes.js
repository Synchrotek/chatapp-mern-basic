const express = require('express');
const { Logout, Login, Singup } = require('../controllers/auth.controllers');
const router = express.Router();

router.post('/signup', Singup);
router.post('/login', Login);
router.post('/logout', Logout);

module.exports = router;