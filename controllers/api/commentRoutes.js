const router = require('express').Router();
const { BlogComment } = require('../../models');
const withAuth = require('../../utils/authorization');

router.post('/', withAuth, async (req, res) => {
  try {
    const userData = await BlogComment.create({
     content: req.body.content,
     post_id: req.body.post_id,
     user_id: req.session.user_id,
    });
   

      res.status(200).json(userData);
   

   
   
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
