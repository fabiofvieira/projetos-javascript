const { Post, User } = require('../models');
const slugify = require('slugify');

module.exports.getAll = (page = 1) => {
    return Post.findAll();
}

module.exports.create = (data) => {
    return new Promise((resolve, reject) => {
        Post
            .create(data)
            .then(created_post => {
                Post
                    .update({ 
                        slug: slugify(`${created_post.title}-${created_post.id}`).toLowerCase()
                    }, { where: { id: created_post.id }})
                    .then(post => resolve(Post.findById(created_post.id)))
                    .catch(err => { throw err })
            })
            .catch(err => reject(err))
    });

}

module.exports.getBySlug = (slug) => {
    return Post.findOne({
        where: {
            slug: slug
        },
        include: [
            { model: User }
        ]
    })
}