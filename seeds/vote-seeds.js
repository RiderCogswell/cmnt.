const { Vote } = require('../models');

const votedata = [
  {
    user_id: 1,
    topic_id: 19
  },
  {
    user_id: 2,
    topic_id: 8
  },
  {
    user_id: 8,
    topic_id: 12
  },
  {
    user_id: 3,
    topic_id: 19
  },
  {
    user_id: 4,
    topic_id: 3
  },
  {
    user_id: 5,
    topic_id: 16
  },
  {
    user_id: 6,
    topic_id: 7
  },
  {
    user_id: 7,
    topic_id: 6
  },
  {
    user_id: 8,
    topic_id: 18
  },
  {
    user_id: 9,
    topic_id: 16
  },
  {
    user_id: 10,
    topic_id: 17
  },
  {
    user_id: 11,
    topic_id: 2
  },
  {
    user_id: 12,
    topic_id: 10
  },
  {
    user_id: 13,
    topic_id: 11
  },
  {
    user_id: 14,
    topic_id: 1
  },
  {
    user_id: 15,
    topic_id: 18
  },
  {
    user_id: 16,
    topic_id: 15
  },
  {
    user_id: 17,
    topic_id: 7
  },
  {
    user_id: 18,
    topic_id: 4
  },
  {
    user_id: 19,
    topic_id: 16
  },
  {
    user_id: 20,
    topic_id: 18
  },
  {
    user_id: 4,
    topic_id: 10
  },
  {
    user_id: 10,
    topic_id: 5
  },
  {
    user_id: 5,
    topic_id: 16
  },
  {
    user_id: 6,
    topic_id: 17
  },
  {
    user_id: 1,
    topic_id: 15
  },
  {
    user_id: 7,
    topic_id: 13
  },
  {
    user_id: 6,
    topic_id: 3
  },
  {
    user_id: 6,
    topic_id: 13
  },
  {
    user_id: 7,
    topic_id: 1
  },
  {
    user_id: 4,
    topic_id: 15
  },
  {
    user_id: 2,
    topic_id: 18
  },
  {
    user_id: 9,
    topic_id: 10
  },
  {
    user_id: 10,
    topic_id: 15
  },
  {
    user_id: 8,
    topic_id: 1
  },
  {
    user_id: 10,
    topic_id: 8
  },
  {
    user_id: 2,
    topic_id: 13
  },
  {
    user_id: 9,
    topic_id: 20
  },
  {
    user_id: 1,
    topic_id: 17
  },
  {
    user_id: 10,
    topic_id: 9
  },
  {
    user_id: 10,
    topic_id: 3
  },
  {
    user_id: 5,
    topic_id: 6
  },
  {
    user_id: 6,
    topic_id: 12
  },
  {
    user_id: 5,
    topic_id: 2
  },
  {
    user_id: 6,
    topic_id: 14
  },
  {
    user_id: 8,
    topic_id: 18
  },
  {
    user_id: 3,
    topic_id: 4
  }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;