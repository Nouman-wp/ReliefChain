module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl; // Store the original URL
    req.flash('error', 'You must be logged in to access this page.');
    return res.redirect('/auth/login');
  }
  next();
};