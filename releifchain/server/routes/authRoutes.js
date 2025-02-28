const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController');

// Login route
router.get('/login', authController.renderLogin);
router.post('/login', passport.authenticate('local', {
  failureFlash: true,
  failureRedirect: '/auth/login',
}), authController.login);
// Signup route
router.get('/signup', authController.renderSignup);
router.post('/signup', authController.signup);

// Logout route
router.get('/logout', authController.logout);

module.exports = router;