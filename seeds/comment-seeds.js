const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'example',
    user_id: 6,
    topic_id: 1
  },
  {
    comment_text: 'example',
    user_id: 6,
    topic_id: 8
  },
  {
    comment_text: 'example',
    user_id: 3,
    topic_id: 10
  },
  {
    comment_text: 'example',
    user_id: 3,
    topic_id: 18
  },
  {
    comment_text: 'example',
    user_id: 7,
    topic_id: 5
  },
  {
    comment_text: 'example',
    user_id: 1,
    topic_id: 20
  },
  {
    comment_text: 'example',
    user_id: 6,
    topic_id: 7
  },
  {
    comment_text: 'example',
    user_id: 7,
    topic_id: 4
  },
  {
    comment_text: 'example',
    user_id: 6,
    topic_id: 12
  },
  {
    comment_text: 'example',
    user_id: 6,
    topic_id: 20
  },
  {
    comment_text: 'example',
    user_id: 3,
    topic_id: 14
  },
  {
    comment_text: 'example',
    user_id: 5,
    topic_id: 4
  },
  {
    comment_text:
    'example',
    user_id: 4,
    topic_id: 9
  },
  {
    comment_text:
      'example',
    user_id: 5,
    topic_id: 14
  },
  {
    comment_text: 'example',
    user_id: 6,
    topic_id: 2
  },
  {
    comment_text: 'example',
    user_id: 8,
    topic_id: 2
  },
  {
    comment_text:
    'example',
    user_id: 2,
    topic_id: 20
  },
  {
    comment_text: 'example',
    user_id: 4,
    topic_id: 11
  },
  {
    comment_text:
    'example',
    user_id: 5,
    topic_id: 13
  },
  {
    comment_text:
    'example',
    user_id: 9,
    topic_id: 16
  },
  {
    comment_text: 'example',
    user_id: 6,
    topic_id: 4
  },
  {
    comment_text: 'example',
    user_id: 4,
    topic_id: 10
  },
  {
    comment_text: 'example',
    user_id: 3,
    topic_id: 8
  },
  {
    comment_text:
    'example',
    user_id: 8,
    topic_id: 10
  },
  {
    comment_text:
    'example',
    user_id: 1,
    topic_id: 15
  },
  {
    comment_text: 'example',
    user_id: 5,
    topic_id: 3
  },
  {
    comment_text: 'example',
    user_id: 1,
    topic_id: 15
  },
  {
    comment_text: 'example',
    user_id: 4,
    topic_id: 16
  },
  {
    comment_text: '.',
    user_id: 4,
    topic_id: 18
  },
  {
    comment_text: 'example',
    user_id: 4,
    topic_id: 10
  },
  {
    comment_text: 'example',
    user_id: 7,
    topic_id: 5
  },
  {
    comment_text: 'example',
    user_id: 10,
    topic_id: 1
  },
  {
    comment_text: 'example',
    user_id: 3,
    topic_id: 19
  },
  {
    comment_text: 'example',
    user_id: 5,
    topic_id: 3
  },
  {
    comment_text: 'example',
    user_id: 10,
    topic_id: 14
  },
  {
    comment_text: 'example',
    user_id: 10,
    topic_id: 8
  },
  {
    comment_text: 'example',
    user_id: 10,
    topic_id: 11
  },
  {
    comment_text: 'example',
    user_id: 8,
    topic_id: 5
  },
  {
    comment_text: 'example',
    user_id: 8,
    topic_id: 19
  },
  {
    comment_text: 'example',
    user_id: 9,
    topic_id: 19
  },
  {
    comment_text:
      'example',
    user_id: 5,
    topic_id: 4
  },
  {
    comment_text:
    'example',
    user_id: 2,
    topic_id: 11
  },
  {
    comment_text: 'example',
    user_id: 4,
    topic_id: 6
  },
  {
    comment_text: 'example',
    user_id: 9,
    topic_id: 6
  },
  {
    comment_text:
    'example',
    user_id: 7,
    topic_id: 9
  },
  {
    comment_text: 'example',
    user_id: 4,
    topic_id: 19
  },
  {
    comment_text: 'example',
    user_id: 10,
    topic_id: 1
  },
  {
    comment_text:
    'example',
    user_id: 2,
    topic_id: 19
  },
  {
    comment_text: 'example',
    user_id: 10,
    topic_id: 1
  },
  {
    comment_text: 'example',
    user_id: 10,
    topic_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;