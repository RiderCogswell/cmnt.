const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Topic model to be created
class Topic extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      topic_id: body.topic_id
    }).then(() => {
      return Topic.findOne({
        where: {
          id: body.topic_id
        },
        attributes: [
          'id',
          'title',
          'created_at',
          [
            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE topic.id = vote.topic_id)'),
            'likes'
          ]
        ]
      });
    });
  };
}

// create fields/columns for Post model
Topic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'topic'
  }
);

module.exports = Topic;