const User = require('../models/User');
const passport = require('passport');

module.exports.renderLogin = (req, res) => {
  res.render('pages/login', { title: 'Login' });
};


module.exports.login = (req, res) => {
  req.flash('success', 'Welcome back!');
  const redirectUrl = req.session.returnTo || '/';
  delete req.session.returnTo; // Clear the returnTo URL from the session
  console.log('User after login:', req.user); // Debugging: Check if req.user is set
  res.redirect(redirectUrl);
};


  module.exports.renderSignup = (req, res) => {
    res.render('pages/signup', { title: 'Signup' });
  };
  
  module.exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
      const user = new User({ username, email });
      await User.register(user, password); // Register the user
      req.flash('success', 'Welcome to ReliefChain!');
      res.redirect('/');
    } catch (err) {
      req.flash('error', err.message);
      res.redirect('/auth/signup');
    }
  };


module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      req.flash('error', 'Failed to log out. Please try again.');
      return res.redirect('/');
    }
    req.flash('success', 'You have been logged out.');
    res.redirect('/');
  });
};