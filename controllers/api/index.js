const router = require('express').Router();
const userRoutes = require('./bloggerRoutes');
const projectRoutes = require('./blogRoutes');

router.use('/bloggers', userRoutes);
router.use('/blog', projectRoutes);

module.exports = router;