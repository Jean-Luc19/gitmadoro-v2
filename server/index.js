const path = require('path');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let secret = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET
};

if(process.env.NODE_ENV != 'production') {
  secret = require('./secret');
}

global.secret = secret;

const authRoutes = require('./routes/auth');
const projectsRoutes = require('./routes/projects');

const app = express();

app.use(passport.initialize());

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectsRoutes);

// Serve the built client

app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

let server;
function runServer(db=secret.DATABASE_URL, port=3001) {
    return new Promise((resolve, reject) => {
      mongoose.connect(db || process.env.DATABASE_URL, err => {
        if (err) {
          return reject(err);
        }
        console.log('Connected To DB');
        server = app.listen(port, () => {
            resolve();
        }).on('error', reject);
      });
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};
