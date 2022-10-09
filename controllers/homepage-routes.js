const router = require('express').Router();
const { BlogUser, BlogPost } = require('../models')

router.get('/', async (req, res) => {
    try {
        const blogData = await BlogPost.findAll({
            include: [
                {
                    model: BlogUser,
                    attributes: ['name']
                },
            ],
            
        });
        // console.log(blogData)
        const blogPostData = blogData.map((post) => post.get({ plain: true}));
        // console.log(blogPostData)
        res.render('blog', {
            blogPostData
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
});

router.get('/login', async (req, res) => {
    res.render('login')
});

// Use withAuth middleware to prevent access to route
router.get('/profile', async (req, res) => {
    res.render('dashboard')
});

module.exports = router; 
