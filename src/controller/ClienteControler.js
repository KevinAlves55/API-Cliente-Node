const express = require('express');

const Cliente = require('../model/Cliente');

const router = express.Router();

router.post('/cliente/cadastrarCliente', (req, res)=>{

    const {nome, sobrenome, email, celular} = req.body;

    Cliente.create({
        nome, 
        sobrenome,
        email,
        celular
    }).then(
        ()=>{
            res.status(200).json({"MSG": "CLIENTE INSERIDO COM SUCESSO!"});
        }
    );

});

module.exports = router;