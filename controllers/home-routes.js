const router = require('express').Router();
const sequelize = require('../config/connection');
const { Topic, User, Comment, Vote } = require('../models');

module.exports = router;