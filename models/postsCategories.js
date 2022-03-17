const data = { foreignKey: 'postId',
otherKey: 'categoryId', 
through: 'PostsCategories', 
as: 'categories' };

const data2 = { foreignKey: 'categoryId', 
otherKey: 'postId', 
through: 'PostsCategories', 
as: 'posts' };

module.exports = (sequelize) => {
    const postCategories = sequelize.define('PostsCategories', {}, {
        underscored: false,
        timestamps: false,
        tableName: 'PostsCategories',
    });

    postCategories.associate = (models) => {
        models.BlogPosts.belongsToMany(
            models.Categories, 
        data,
        );
   models.Categories.belongsToMany(
            models.BlogPosts, 
            data2,
        );
        };
return postCategories;
    };
