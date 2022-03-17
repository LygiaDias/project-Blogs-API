const { DataTypes } = require('sequelize');

const data = { 
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
  },  
  
     title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
  
  content: {
      type: DataTypes.STRING,
       allowNull: false,
  },  
  
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
      },  
published: {
        type: DataTypes.DATE,
        allorNull: false,
      },
updated: {
    type: DataTypes.DATE,
    allorNull: false,
  },

};

module.exports = (sequelize) => {
    const blogPosts = sequelize.define('BlogPosts', 

data, 

{
    undercored: true,
    timestamps: false,
   });

blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
};
return blogPosts;
};