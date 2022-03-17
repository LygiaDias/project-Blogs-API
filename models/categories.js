const { DataTypes } = require('sequelize');

const data = { 
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
  },
name: {
        type: DataTypes.STRING,
        allowNull: false,
  },

};

module.exports = (sequelize) => {
    const Categories = sequelize.define('Categories', 

data, 

{
    undercored: true,
    timestamps: false,
    tableName: 'Categories',
});

return Categories;
};