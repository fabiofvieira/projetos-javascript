const repository = require('../repositories/post');

module.exports.get = (req, res, next) => {
    repository
        .getAll().then(r => res.send(r));
}

module.exports.create = (req, res, next) => {
    repository
        .create(req.body)
        .then(r => res.send(r))
        .catch(err => res.send(400, err));
}

module.exports.categories = (req, res, next) => {
    res.send('categorias');
}

module.exports.posts = (req, res, next) => {
    res.send('posts');
}

module.exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(r =>  !!r ? res.send(r) : res.status(404).send());
}