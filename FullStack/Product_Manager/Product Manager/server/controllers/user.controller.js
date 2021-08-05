const Product = require("../models/user.model");

module.exports.createNewProduct = (req, res) => {
  Product.create(req.body)
    .then(newlyCreatedProduct => res.json({ Product: newlyCreatedProduct }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};


module.exports.getAllProduct = (req, res) => {
  Product.find()
    .then(displayProduct => res.json( displayProduct))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.getSpecificProduct = (req, res) => {
  Product.findOne({_id:req.params.id})
    .then(specificProduct => res.json(specificProduct ))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

// module.exports.updateProduct = (req, res) => {
//   Product.findOneAndUpdate({_id:request.params.id},req.body)
//     .then(changeProduct => res.json({ Product: changeProduct }))
//     .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
// };

module.exports.updateProduct=(request,response) =>{
  Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
  .then(updateproduct =>response.json(updateproduct))
  .catch(err => response.json({ message: "Something went wrong", error: err}))
}

module.exports.deleteproduct = (request,response) =>{
  Product.deleteOne({ _id: request.params.id })
  .then(destroy => response.json(destroy))
  .catch(err => response.json({ message: "Something went wrong", error: err}))
};