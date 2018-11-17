const express = require('express')

const app = express()

const books = {}

app.listen(8080, function() {
    console.log('Server listening on port 8080')
    console.log('Server listening on port 8089')
})

app.get('/')

app.get('/store-data', function (request, response) {
    const name = request.query.name
    const tilte = request.query.name
    if (books[name]) {
        books[name].push({
        title: title,
        ...})}
        else {
        books[name] = [{
        title: title,
        ...}]}
        
    app.redirect('/search')
    })
        
app.get('/search') // render form with name input
        
app.get('/books', function (request, response) {
        const name = request.query.name
        if (books[name]) {
        response.render('books', {
        books: books[name]
        })}
        else {
        response.render('error')}
        })
        
        const books = [book, book2, book3]
