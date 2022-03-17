const { DataTypes } = require('sequelize');

const data = { 
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
  },  
  displayName: {
        type: DataTypes.STRING,
        allowNull: false,
  }, 
  email: {
    type: DataTypes.STRING,
        allowNull: false,
        unique: true,
  },
  password: {
    type: DataTypes.STRING,
        allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
        allowNull: false,
  },

};

module.exports = (sequelize) => {
    const user = sequelize.define('User', 

data, 

{
    undercored: true,
    timestamps: false,
    
});
user.associate = (models) => {
    user.hasMany(models.BlogPosts, { foreignKey: 'userId', as: 'posts' });
};

return user;
};