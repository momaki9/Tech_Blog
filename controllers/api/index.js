const router = require('express').Router();
const userRoutes = require('./bloggerRoutes');
const projectRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes')

router.use('/bloggers', userRoutes);
router.use('/blog', projectRoutes);
router.use('/comments', commentRoutes);

module.exports = router;