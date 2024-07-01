const express = require('express');
const { getUsersForSidebar } = require('../controllers/user.controllers');
const protectRoute = require('../middleware/protectRoute');

const router = express.Router();

router.get('/', protectRoute, getUsersForSidebar);

module.exports = router;