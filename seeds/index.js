const sequelize = require('../config/connection');
const { BlogUser, BlogPost, BlogComment } = require('../models');

const blogUserData = require('./blogUser.json');
const blogPostData = require('./blogPosts.json');
const blogCommentData = require('./blogComments.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const blogUsers = await BlogUser.bulkCreate(blogUserData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of blogPostData) {
        await BlogPost.create({
            ...post,
            user_id: blogUsers[Math.floor(Math.random() * blogUsers.length)].id,
        });
    }

    const blogComment = await BlogComment.bulkCreate(blogCommentData);

    process.exit(0);
}

seedDatabase();


