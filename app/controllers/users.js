const express = require('express');
const users = express.Router();
const models = require('../models');
const User = models.User;

// Index
users.get('/', (req, res) => {
  User.findAll().then((allUser) => {
    let ctx = {users: allUser};
    res.render('users/index.handlebars', ctx);
  });
});

// New
users.get('/new', (req, res) => {
  res.render('new');
});

// Show
users.get('/:id', (req, res) => {
  User.findById(req.params.id).then((userRecord) => {
    let ctx = {user: userRecord};
    res.render('users/show.handlebars', ctx);
  });
});

// Create
users.post('/create', (req, res) => {
  // console.log(JSON.stringify(req, undefined, 2));
  createOrUpdate(req, res);
});

// Update
users.put('/:id/update', (req, res) => {
  createOrUpdate(req, res);
});

const createOrUpdate = (req, res) => {
  User.create({
    id: req.body.id ? req.body.id : null,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }).then(user => {
    res.status(200).redirect('/users');
  }).catch(error => {
    res.status(500).json(error);
  });
};

module.exports = users;
