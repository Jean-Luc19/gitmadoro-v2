const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose'),
      passportGithub = require('../auth/github'),
      bearer = require('../auth/bearer'),
      Project = require('../models/project');

const bearerAuth = passportGithub.authenticate('bearer', {session: false});

mongoose.Promise = global.Promise;

router.post('/new', bearerAuth, (req, res) => {
  const project = new Project({
    title: req.body.title,
    creator: req.user._id
  });

  project.save()
    .then(res => {
      console.log(res);
    });

});

module.exports = router;
