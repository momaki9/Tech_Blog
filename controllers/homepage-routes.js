const router = require('express').Router();
const { BlogUser, BlogPost, BlogComment } = require('../models');
const withAuth = require('../utils/authorization');

router.get('/', async (req, res) => {
    try {
        const blogData = await BlogPost.findAll({
          attributes: ['id', 'title', 'description', 'date_posted'],
            include: [
                {
                    model: BlogUser,
                    attributes: ['name']
                },
                {
                  model: BlogComment,
                  attributes: ['id', 'content', 'post_id', 'date_posted', 'user_id']
              },
            ],
            
        });
        const blogPostData = blogData.map((post) => post.get({ plain: true}));
        res.render('blog', {
            blogPostData,
            logged_in: req.session.logged_in 
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
          {
            model: BlogComment, 
            include: [
              {
                model: BlogUser,
                as: "user"
              }
            ]
          }
        ],
      });
  
      const project = projectData.get({ plain: true });
      res.render('post', {
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
    res.render('login');
});


router.get('/signup', (req, res) => {
  res.render('signup');
});


router.get('/profile', withAuth, async (req, res) => {
    try {
      //pulls the user data along with the user's blog posts
      const userData = await BlogUser.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: BlogPost }],
      });
      const userDataObj = userData.get({ plain: true });
      res.render('profile', {
        ...userDataObj,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router; 
