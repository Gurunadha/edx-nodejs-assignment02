const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const serverObjects = require('./routes')

let store = {
    posts: [{
        name: 'Top 10 ES6 Features every Web Developer must know',
        url: 'https://webapplog.com/es6',
        text: 'This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.',
        comments: [
            'Cruel…..var { house, mouse} = No type optimization at all',
            'I think you’re undervaluing the benefit of ‘let’ and ‘const’.',
            '(p1,p2)=>{ … } ,i understand this ,thank you !'
        ]
    }]
}
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(logger('dev'))

//posts RESTful API
app.get('/posts', (req, res) => serverObjects.posts.getPosts(req, res, store))
app.post('/posts', (req, res) => serverObjects.posts.addPost(req, res, store))
app.put('/posts/:postId', (req, res) => serverObjects.posts.updatePost(req, res, store))
app.delete('/posts/:postId', (req, res) => serverObjects.posts.removePost(req, res, store))

//comments RESTful API
app.get('/posts/:postId/comments', (req, res) => serverObjects.comments.getComments(req, res, store))
app.post('/posts/:postId/comments', (req, res) => serverObjects.comments.addComment(req, res, store))
app.put('/posts/:postId/comments/:commentId', (req, res) => serverObjects.comments.updateComment(req, res, store))
app.delete('/posts/:postId/comments/:commentId', (req, res) => serverObjects.comments.removeComment(req, res, store))

app.listen(3000)