// Sequelize library
const { Model, DataTypes } = require('sequelize');
// Database connection
const sequelize = require('../config/connection.js');

class Tag extends Model {}

// Tag model rules
Tag.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

      tag_name: {
        type: DataTypes.STRING,
      },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
