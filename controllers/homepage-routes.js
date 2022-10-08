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
        console.log(blogData)
        const blogPostData = blogData.map((post) => post.get({ plain: true}));
        console.log(blogPostData)
        res.render('dashboard', {
            blogPostData
        });
    } catch (err) {
        res.status(500).json(err);
    }
    
});

module.exports = router; 
