const {DataTypes} = require('sequelize');

const sequelize = require('../database/connection');

const Category = sequelize.define('Category', {
    description_: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
},
{
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
} );

module.exports = Category;