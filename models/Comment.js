const { Model, DataTypes } = require('sequelize');
const sequelize = require(/* connection when established */);

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
            comment_text: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            user_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'user',
                    key: 'id'
                }
            },
            topic_id: {
                type: DataTypes.INTEGER,
                references: {
                  model: 'topic',
                  key: 'id'
                }
              }
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'comment'
          }
        );

module.exports = Comment;