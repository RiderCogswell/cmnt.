const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Topic, User, Comment } = require('../models');


// Navigation prev/next
router.post('/nav', withAuth, async (req, res) => {
  console.log('---------------')
  if(req.body.nav == 'prev'){

    req.session.currentIndex -= 1;
    if(req.session.currentIndex < 0){
      req.session.currentIndex = 0;
    }

    res.set('Content-Type', 'text/html');
    res.send(JSON.stringify(req.session.indexes[req.session.currentIndex]));
  }

  if(req.body.nav == 'next'){

    if(req.session.currentIndex == (req.session.indexes.length - 1)){
      console.log('already at the end');
      const data = await Topic.findAll()
      
      let max = data.length;
      let randomNumber = Math.floor(Math.random() * (max - 1 + 1)) + 1
      req.session.currentIndex += 1;
      req.session.indexes.push(randomNumber);
      
      res.set('Content-Type', 'text/html');
      res.send(JSON.stringify(randomNumber));
    }else{
      req.session.currentIndex += 1;

      res.set('Content-Type', 'text/html');
      res.send(JSON.stringify(req.session.indexes[req.session.currentIndex]));
    }
  }
})

// Root landing - redirect to ID based route
router.get('/', withAuth, async (req, res) => {
    const data = await Topic.findAll()
    
    let max = data.length;
    let randomNumber = Math.floor(Math.random() * (max - 1 + 1)) + 1
    req.session.currentIndex = 0;
    req.session.indexes = [];
    req.session.indexes.push(randomNumber);

    console.log(randomNumber);

    //req.session.firstLogin = false;

    res.redirect(`/topic/${randomNumber}`);
});
  

// Get single Topic by ID
router.get('/topic/:id', async (req, res) => {
  console.log('entering single topic route')
  
  const result = await Topic.findOne({
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

  const topic = result.get({ plain: true });
  
  // For passing into handlebars, position zero of prev/back array
  let atZero;

  console.log(req.session.currentIndex);
  if(req.session.currentIndex == 0){
    atZero = true;
  }else{
    atZero = false;
  }

  if (!req.session.loggedIn) {
    res.render('login', {
    });
  }
  else{
    res.render('homepage', {
      topic,
      loggedIn: req.session.loggedIn,
      atZero: atZero,
      user_id: req.session.user_id
    });
  }
})

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
