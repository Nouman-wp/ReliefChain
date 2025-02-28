const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const User = require('./models/User');
const MongoStore = require('connect-mongo');
const dashboardRoutes = require('./routes/dashboardRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use(session({
  store: MongoStore.create({
    mongoUrl: process.env.DB_URI, // MongoDB connection URL
    crypto: {
      secret: process.env.SESSION_SECRET || 'noumanop', // Optional: Encrypt session data
    },
    touchAfter: 24 * 3600, // Time period in seconds to resave the session
  }),
  secret: process.env.SESSION_SECRET || 'noumanop',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false, // Set to true if using HTTPS
    maxAge: 7 * 24 * 60 * 60 * 1000, // Session expiration time (1 week)
  },
}))


// Passport configuration
passport.use(new LocalStrategy(User.authenticate()));

// Serialize user
passport.serializeUser((user, done) => {
  console.log('Serializing user:', user); // Debugging: Check if user is serialized
  done(null, user.id);
});

// Deserialize user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    console.log('Deserializing user:', user); // Debugging: Check if user is deserialized
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());


app.use(flash());


// Middleware to pass user object to all views
app.use((req, res, next) => {
  res.locals.user = req.user || null; // Pass the user object to all views
  console.log('User in middleware:', req.user); // Debugging: Check if req.user is set
  next();
});


// Set EJS as the view engine
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/views'));

// Flash messages middleware
app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});



// Routes

app.use('/auth', require('./routes/authRoutes'));
app.use('/campaigns', require('./routes/campaignRoutes'));
app.use('/donations', require('./routes/donationRoutes'));
app.use('/track', require('./routes/trackRoutes'));
app.use('/uploads', express.static(path.join(__dirname, '../client/public/uploads')));

// Home route
app.get('/', (req, res) => {
  res.render('pages/home', { title: 'ReliefChain' } );
});

// Error handlers
app.use((req, res) => {
  res.status(404).render('errors/404', { title: 'Page Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('errors/500', { title: 'Server Error' });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});