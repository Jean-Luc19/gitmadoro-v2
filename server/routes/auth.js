const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bearer = require('../auth/bearer');
const passportGithub = require('../auth/github');



router.get('/github',
    passportGithub.authenticate('github', {scope: ['profile', 'repo', 'user']}));

router.get('/github/callback',
    passportGithub.authenticate('github', {
        failureRedirect: '/',
        session: false
    }),
    (req, res) => {
        res.cookie('accessToken', req.user.accessToken, {expires: 0});
        res.redirect('/');
    }
);

router.get('/logout', (req, res) => {
    req.logout();
    res.clearCookie('accessToken');
    res.redirect('/');
});

router.get('/me',
    passportGithub.authenticate('bearer', {session: false}),
    (req, res) => res.json({ user: req.user })
);

module.exports = router;
