const Sequelize = require('sequelize');

const connection = require('../database/database');

const Cliente = connection.define(
    'tbl_cliente',   
    {
        cod_cliente:{
            type: Sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type:Sequelize.STRING(500),
            allowNull: false
        },
        sobrenome:{
            type:Sequelize.STRING(500),
            allowNull: false
        },
        email:{
            type:Sequelize.STRING(500),
            allowNull: false
        },
        celular:{
            type:Sequelize.STRING(50),
            allowNull: false
        }
    }
);

Cliente.sync({force: false});
module.exports = Cliente;