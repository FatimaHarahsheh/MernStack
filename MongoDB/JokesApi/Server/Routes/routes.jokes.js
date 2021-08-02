const jokesController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', jokesController.findAlljokess);
    app.get('/api/jokes/:id', jokesController.findOneSinglejokes);
    app.put('/api/jokes/update/:id', jokesController.updateExistingjokes);
    app.post('/api/jokes/new', jokesController.createNewjokes);
    app.get('/api/jokes/random', jokesController.findOneSinglejokes);
    app.delete('/api/jokes/delete/:id', jokesController.deleteAnExistingjokes);
}