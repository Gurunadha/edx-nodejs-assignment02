module.exports = {
    getPosts(req, res, store) {
        res.status(200).send(store.posts)
    },
    addPost(req, res, store) {
        store.posts.push(req.body)
        let id = store.posts.length
        res.status(201).send({ id: id })
    },
    updatePost(req, res, store) {
        store.posts[req.params.postId] = req.body
        res.status(200).send(store.posts[req.params.postId])
    },
    removePost(req, res, store) {
        store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }

}