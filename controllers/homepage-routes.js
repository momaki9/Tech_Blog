const router = require('express').Router();
const { BlogUser, BlogPost } = require('../models')
const withAuth = require('../utils/authorization');

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

router.get('/blog/:id', async (req, res) => {
    try {
      const projectData = await BlogPost.findByPk(req.params.id, {
        include: [
          {
            model: BlogUser,
            attributes: ['name'],
          },
        ],
      });
  
      const project = projectData.get({ plain: true });
  
      res.render('blog', {
        ...project,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
    res.render('signup');
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});


router.get('/profile', withAuth, async (req, res) => {
    try {
      const userData = await BlogUser.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: BlogPost }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router; 
