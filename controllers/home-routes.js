const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Topic, User, Comment, Vote } = require('../models');

// get all posts for homepage
router.get('/', withAuth, (req, res) => {
    console.log('======================');
    Topic.findAll({
      attributes: [
        'id',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE topic.id = vote.topic_id)'), 'likes']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'topic_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          },
        },
        {
          model: User,
          attributes: ['username']
        }
      ],
    })
      .then(dbPostData => {
        const topics = dbPostData.map(topic => topic.get({ plain: true }));

        let max = topics.length-1;
        let randomNumber = Math.floor(Math.random() * (max - 1 + 1)) + 1
        
        const topic = topics[randomNumber];
        console.log(topic);

        if (!req.session.loggedIn) {
          res.render('login', {
          });
        }
        else{
          res.render('homepage', {
            topic
          });
        }
       
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  // get single post
  router.get('/topic/:id', (req, res) => {
    Topic.findOne({
      where: {
        id: req.params.id
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
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        const topic = dbPostData.get({ plain: true });
  
        res.render('single-topic', {
          topic,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('signup');
  });

module.exports = router;
