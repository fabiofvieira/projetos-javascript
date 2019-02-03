const repository = require('../repositories/user');
module.exports.create = (req, res, next) => {
    repository.create(req.body).then(r => {
        res.status(201).send({
            data: r,
            message: 'Usuário criado com sucesso!'
        })
    }).catch(err => res.status(400).send({ message: err }));

}