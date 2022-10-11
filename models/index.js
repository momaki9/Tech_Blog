const BlogUser = require('./BlogUser');
const BlogPost = require('./BlogPost');

BlogUser.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(BlogUser, {
    foreignKey: 'user_id'
});

module.exports = { BlogUser, BlogPost};