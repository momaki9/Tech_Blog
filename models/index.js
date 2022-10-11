const BlogUser = require('./BlogUser');
const BlogPost = require('./BlogPost');
const BlogComment = require('./BlogComment');

BlogUser.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogUser.hasMany(BlogComment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.hasMany(BlogComment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(BlogUser, {
    foreignKey: 'user_id'
});

BlogComment.belongsTo(BlogUser, {
    foreignKey: 'user_id'
});

BlogComment.belongsTo(BlogPost, {
    foreignKey: 'post_id'
});

module.exports = { BlogUser, BlogPost, BlogComment};