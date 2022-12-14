const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/authorization');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {

  const {title , description} =  req.body;

  try {
    const projectData = await BlogPost.update(

    {
      title,
      description,
    },
    {
      where: {
        id: req.params.id
        
      },
    }
    );
    if (!projectData) {
      res.status(404).json({message: 'Blog post update failed'})
    }
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const projectData = await BlogPost.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
