const { Post, User, Category, Tag } = require('../models');
const slugify = require('slugify');

module.exports.getAll = (limit = 10) => {
    return Post.findAll({
        attributes: ['id', 'title', 'content', 'slug', 'UserId', 'CategoryId' ],
        include: [ 
            { model: User, attributes: ['name'] }, 
            { model: Category, attributes: ['name'] }, 
            { model: Tag, attributes: ['name'], through: { attributes: [] } }
        ],
        limit: limit});
}

module.exports.getPaginated = (page = 1, perPage = 10, query = []) => {
    return new Promise((resolve, reject) => {
        (query.length == 0 ? Post.count() : Post.count(query))
            .then((count) => {
                let paginationData = {
                    total: count,
                    pages: Math.ceil(count / perPage),
                    atual: page,
                    hasNext: Math.ceil(count / perPage) > page
                };
                Post.findAll({
                    ...query,
                    limit: perPage,
                    offset: perPage * (page - 1),
                    $sort: { id: 1 },
                    include: [
                        { model: User, attributes : ['name'] }, 
                        { model: Category, attributes: ['name'] }, 
                        { model: Tag, through: { attributes: [] }, attributes: ['name'] }
                    ],
                    attributes: [ 'id', 'title', 'slug', 'content', 'UserId', 'CategoryId' ]
                })
                .then(r => resolve({ result: r, ...paginationData }))
                .catch(err => reject(err));
            }).catch(err => reject(err));
    })
}

module.exports.create = (data) => {
    return new Promise((resolve, reject) => {
        Post
            .create(data)
            .then(created_post => {
                if(data.tags.length > 0)
                    created_post.addTags(data.tags).catch(err => { console.log(err) });
                Post
                    .update({ 
                        slug: slugify(`${created_post.title}-${created_post.id}`).toLowerCase()
                    }, { where: { id: created_post.id }})
                    .then(() => resolve(Post.findByPk(created_post.id, { include: [ User, Category, Tag ]})))
                    .catch(err => { throw err })

            })
            .catch(err => reject(err))
    });

}

module.exports.getBySlug = (slug) => {
    return Post.findOne({
        where: { slug: slug },
        include: [ User, Category, Tag ]
    })
}