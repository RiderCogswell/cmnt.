//model imports
const Topic = require('./Topic');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

//associations
User.hasMany(Topic, {
    foreignKey: 'user_id'
});
  
Topic.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
User.belongsToMany(Topic, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Topic.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'topic_id',
    onDelete: 'SET NULL'
});
  
Vote.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Vote.belongsTo(Topic, {
    foreignKey: 'topic_id',
    onDelete: 'SET NULL'
});
  
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
  
Topic.hasMany(Vote, {
    foreignKey: 'topic_id'
});
  
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Comment.belongsTo(Topic, {
    foreignKey: 'topic_id',
    onDelete: 'SET NULL'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Topic.hasMany(Comment, {
    foreignKey: 'topic_id'
});

module.exports = { Topic, User, Vote, Comment };