const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// if we make a request to any endpoint that doesnt exist we get a 404
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;