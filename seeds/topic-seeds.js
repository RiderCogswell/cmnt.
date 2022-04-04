const { Topic } = require('../models');

const topicdata = [
  {
    title: 'What is your favorite color?',
    user_id: 17
  },
  {
    title: 'Are you more of a blue person or a red person?',
    user_id: 18
  },
  {
    title: 'What do you think about space travel?',
    user_id: 19
  },
  {
    title: 'Back flip or Front flip, and why?',
    user_id: 20
  },
  {
    title: 'What is your countries cultural food(s)?',
    user_id: 3
  },
  {
    title: 'What has been the best day of your life, so far?',
    user_id: 3
  },
  {
    title: 'Where did you grow up?',
    user_id: 4
  },
  {
    title: 'Do you know any good jokes?',
    user_id: 4
  },
  {
    title: 'Which is typically better, the book or the movie?',
    user_id: 5
  },
  {
    title: 'When you take notes, do you jot down ideas online or with a pen and paper?',
    user_id: 6
  },
  {
    title: 'If you could drive any car, what car would you drive?',
    user_id: 7
  },
  {
    title: 'What is the first thing you drink when you wake up?',
    user_id: 8
  },
  {
    title: 'What would you pick to add to your coffee, Baileys, Amaretto, or Whisky?',
    user_id: 9
  },
  {
    title: 'Do you prefer to receive recognition in public or private? Why?',
    user_id: 10
  },
  {
    title: 'What sort of physical exercise do you enjoy? (Keep it PG)',
    user_id: 11
  },
  {
    title: 'If given the opportunity, would you go to space? What would be the first thing you did if so?',
    user_id: 12
  },
  {
    title: 'What is your favorite scent? Why?',
    user_id: 13
  },
  {
    title: 'Is a hot dog a sandwich?',
    user_id: 14
  },
  {
    title: 'Do you have any hidden talents?',
    user_id: 15
  },
  {
    title: 'Where would you love to go for a relaxing holiday?',
    user_id: 16
  }
];

const seedTopics = () => Topic.bulkCreate(topicdata);

module.exports = seedTopics;