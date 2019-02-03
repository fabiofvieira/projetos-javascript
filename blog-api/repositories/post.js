const { Post, User, Category, Tag } = require('../models');
const slugify = require('slugify');

module.exports.getAll = (limit = 10) => {
    return Post.findAll({ include: [ User, Category, Tag ], limit: limit});
}

module.exports.create = (data) => {
    return new Promise((resolve, reject) => {
        Post
            .create(data)
            .then(created_post => {
                //console.log('tags:::', data.tags);
                if(data.tags.length > 0) {
                    created_post.addTags(data.tags).catch(err => { console.log(err) });
                }
                Post
                    .update({ 
                        slug: slugify(`${created_post.title}-${created_post.id}`).toLowerCase()
                    }, { where: { id: created_post.id }})
                    .then(post => resolve(Post.findByPk(created_post.id, { include: [ User, Category, Tag ]})))
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
            User,
            Category,
            Tag
        ]
    })
}