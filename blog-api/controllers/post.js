const repository = require('../repositories/post');

module.exports.get = (req, res, next) => {
    repository
        .getAll(10).then(r => res.send(r));
}

module.exports.create = (req, res, next) => {
    repository
        .create(req.body)
        .then(r => res.status(201).send(r))
        .catch(err => res.status(400).send(err));
}

module.exports.categories = (req, res, next) => {
    res.send('categorias');
}

module.exports.posts = (req, res, next) => {
    let page = req.params.page;
    repository.getPaginated(page).then(r => {
        console.log(r);
        res.status(200).send(r);
    }).catch( err => {
        console.log(err);
        res.status(500).send(err)
    })
}

module.exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(r =>  !!r ? res.send(r) : res.status(404).send());
}