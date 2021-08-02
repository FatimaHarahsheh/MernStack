const jokes = require('../models/jokes.model');
 
module.exports.findAlljokes = (req, res) => {
jokes.find()
        .then(alljokes => res.json({ jokes: alljokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.findOneSinglejokes = (req, res) => {
jokes.findOne({ _id: req.params.id })
        .then(oneSinglejokes => res.json({ jokes: findOneSinglejokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.createNewjokes = (req, res) => {
jokes.create(req.body)
        .then(newlyCreatedjokes => res.json({ jokes: newlyCreatedjokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.updateExistingjokes = (req, res) => {
jokes.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedjokes => res.json({ jokes: updatedjokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
module.exports.deleteAnExistingjokes = (req, res) => {
   jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}