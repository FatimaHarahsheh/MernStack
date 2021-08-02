const UserController = require("../controllers/user.controller");

module.exports = app => {
  app.post("/api/products/new", UserController.createNewProduct);
  app.get("/api/products" ,UserController.getAllProduct);
  app.get("/api/products/:id" ,UserController.getSpecificProduct);
  app.put("/api/products/:id" ,UserController.updateProduct);
  app.delete("/api/products/:id" ,UserController.deleteProduct);

}