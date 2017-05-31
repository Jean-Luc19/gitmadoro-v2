const passport = require('passport');
const GitHubStrategy = require('passport-github');
const User = require('../models/user');

const { github } = global.secret;

passport.use(new GitHubStrategy({
  cliendID: github.CLIENT_ID,
  clientSecret: github.CLIENT_SECRET,
  callbackURL: `/api/auth/github/callback`
  },
  (accessToken, refreshToken, profile, done) => {
    const query = {
      profileId: profile.id
    };

    const updates = {
      name: profile.name,
      profileId: profile.id,
      token: accessToken,
      avatar: profile.avatar_url
    };

    const options = {
      upsert: true,
      new: true
    };

    User.findOneAndUpdate(query, updates, options, (err, user) => {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }
));

module.exports = passport;
