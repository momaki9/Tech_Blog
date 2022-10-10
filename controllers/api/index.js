const router = require('express').Router();
const userRoutes = require('./blogRoutes');
const projectRoutes = require('./bloggerRoutes');

router.use('/bloggers', userRoutes);
router.use('/blog', projectRoutes);

module.exports = router;