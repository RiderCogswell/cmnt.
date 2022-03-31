const router = require('express').Router();
const { exclude } = require('inquirer/lib/objects/separator');
const sequelize = require('../../config/connection');
const { Topic, User, Vote, Comment } = require('../../models');

// GET all topics
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] },
        include: [
            {
                model: Comment,
                attributes: [
                    'id', 
                    'comment_text', 
                    'topic_id', 
                    'user_id', 
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbUserData => res.json(dbData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET a topic
router.get('/:id', (req, res) => {
    Topic.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'user_id',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE topic.id = vote.topic_id)'), 'likes']
        ],
        include: [
            {
                model: Comment, 
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                    'created_at'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbTopicData => {
        if (!dbTopicData) {
            res.status(404).json({ message: 'No topic found with this id' });
            return;
        }
        res.json(dbTopicData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// CREATE a topic
router.post('/', (req, res) => {
    Topic.create({
        title: req.body.title,
        user_id: req.body.user_id
    })
    .then(dbTopicData => res.json(dbTopicData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// UPDATE topic by id
router.put('/:id', (req, res) => {
    Topic.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbTopicData => {
        if (!dbTopicData) {
            res.status(404).json({ message: 'No topic found with this id' });
            return;
        }
        res.json(dbTopicData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE topic
router.delete('/:id', (req, res) => {
    Topic.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbTopicData => {
        if (!dbTopicData) {
            res.status(404).json({ message: 'No topic found with this id' });
            return;
        }
        res.json(dbTopicData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;