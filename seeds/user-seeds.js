const sequelize = require(/* connection when established */);
const { User, Topic } = require('../models');

const userdata = [
  {
    username: 'User1',
    password: 'password123'
  },
  {
    username: 'User2',
    password: 'password123'
  },
  {
    username: 'User3',
    password: 'password123'
  },
  {
    username: 'User4',
    password: 'password123'
  },
  {
    username: 'User5',
    password: 'password123'
  },
  {
    username: 'User6',
    password: 'password123'
  },
  {
    username: 'User7',
    password: 'password123'
  },
  {
    username: 'User8',
    password: 'password123'
  },
  {
    username: 'User9',
    password: 'password123'
  },
  {
    username: 'User10',
    password: 'password123'
  },
  {
    username: 'User11',
    password: 'password123'
  },
  {
    username: 'User12',
    password: 'password123'
  },
  {
    username: 'User13',
    password: 'password123'
  },
  {
    username: 'User14',
    password: 'password123'
  },
  {
    username: 'User15',
    password: 'password123'
  },
  {
    username: 'User16',
    password: 'password123'
  },
  {
    username: 'User17',
    password: 'password123'
  },
  {
    username: 'User18',
    password: 'password123'
  },
  {
    username: 'User19',
    password: 'password123'
  },
  {
    username: 'User20',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;