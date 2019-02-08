const repository = require('../repositories/user');
const authService = require('../services/auth');

module.exports.create = (req, res, next) => {
    repository
        .create(req.body)
            .then(r => {
                res.status(201).send({
                    data: r,
                    message: 'Usuário criado com sucesso!'
                })
            })
            .catch(err => res.status(400).send({ message: err }));
}

module.exports.authorize = (req, res, next) => {
    repository
        .authenticate(req.body)
        .then( async (user) => {
            const token = await authService.generateToken({
                email: user.email,
                name: user.name
            });
            res.status(201).send({
                token: token,
                data: user
            });
        })
        .catch(err => res.status(404).send({ message: err }))
}