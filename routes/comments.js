const bodyParser = require('body-parser')
module.exports = {
    getComments(req, res, store) {
        //by using literal syntax of js object
        res.status(200).send(store.posts[req.params.postId]['comments'])
    },
    addComment(req, res, store) {
        //by using literal syntax of js object
        store.posts[req.params.postId]['comments'].push(req.body)
        let id = store.posts[req.params.postId]['comments'].length
        res.status(201).send({ id: id })
    },
    updateComment(req, res, store) {
        store.posts[req.params.postId].comments[req.params.commentId] = req.body
        res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId])
    },
    removeComment(req, res, store) {
        store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.status(204).send()
    }
}