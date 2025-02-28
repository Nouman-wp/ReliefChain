const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/auth');

// Render dashboard
router.get('/dashboard', isLoggedIn, (req, res) => {
  res.render('pages/dashboard', { title: 'Dashboard' });
});

module.exports = router;