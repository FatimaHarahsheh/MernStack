const { Authors } = require('../Model/authors.model');

module.exports.createAuthors = (request, response) => {
    const { Name } = request.body;
    Authors.create({
       Name
    })
        .then(Authors => response.json(Authors))
        .catch(err => response.json(err));
}
module.exports.updateAuthors = (request, response) => {
    Authors.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthors => response.json(updatedAuthors))
       .catch(err => response.json(err))
}
module.exports.getAuthors = (request, response) => {
    Authors.findOne({_id: request.params.id})
        .then(Authors => response.json(Authors))
       .catch(err => response.json(err))
}

module.exports.displayAuthors = (request, response) => {
    Authors.find({})
        .then(displayAuthors => response.json(displayAuthors))
       .catch(err => response.json(err))
}

module.exports.deleteAuthors = (request, response) => {
    Authors.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
