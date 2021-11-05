const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Category extends Model{};

Category.init(
    {
        category_name: {
            type: DataTypes.STRING,
            

    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Category'
    }
)