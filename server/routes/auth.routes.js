const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is api/auth/ route');
});

router.get('/login', (req, res) => {
    res.send('Login route');
});

module.exports = router;