const router = require('express').Router();

const userRoutes = require('./user-routes');
const topicRoutes = require('./topic-routes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/topics', topicRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;
