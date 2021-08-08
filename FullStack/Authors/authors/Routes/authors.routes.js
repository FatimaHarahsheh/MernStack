const AuthorsController = require('../Controllers/authors.controllers');
module.exports = function(app){
    app.post('/api/new', AuthorsController.createAuthors);
    app.put('/api/authors', AuthorsController.displayAuthors);
    app.put('/api/authors/:id', AuthorsController.getAuthors);
    app.put('/api/edit/:id', AuthorsController.updateAuthors);
    app.delete('/api/delete/:id', AuthorsController.deleteAuthors);

}