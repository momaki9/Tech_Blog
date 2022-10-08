const BlogUser = require('./BlogUser');
const BlogPost = require('./BlogPost');

BlogUser.hasMany(BlogPost, {
    foreignKey: 'blogger_id',
    onDelete: 'CASCADE'
});

BlogPost.belongsTo(BlogUser, {
    foreignKey: 'blogger_id'
});

module.exports = { BlogUser, BlogPost};