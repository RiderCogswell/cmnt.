const router = require('express').Router();

const userRoutes = require('./user-routes');
const topicRoutes = require('./topic-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/topics', topicRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
