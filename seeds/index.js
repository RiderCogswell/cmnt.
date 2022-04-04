const seedUsers = require('./user-seeds');
const seedTopics = require('./topic-seeds');
const seedComments = require('./comment-seeds');
const seedVotes = require('./vote-seeds');

// set up connection to db
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedTopics();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  await seedVotes();
  console.log('--------------');

  process.exit(0);
};

seedAll();