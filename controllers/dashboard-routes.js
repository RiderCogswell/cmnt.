const router = require('express').Router();
const sequelize = require('../config/connection');
const { Topic, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Topic.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE topic.id = vote.topic_id)'), 'likes']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'topic_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const topics = dbPostData.map(topic => topic.get({ plain: true }));
      if (!req.session.loggedIn) {
        res.render('login', {
        });
    }
    else{
        res.render('dashboard', {
            topics,
            loggedIn: req.session.loggedIn,
            user_id: req.session.user_id,
            username: req.session.username
        })
    }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
