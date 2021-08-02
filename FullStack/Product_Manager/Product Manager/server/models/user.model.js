const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title cannot be emtpy"],
		minlength: [3, "The min length should be more than 3"]
	},
	desc: {
		type: String,
		required: [true, "Description cannot be emtpy"],
		minlength: [3, "The min length should be more than 3"]
	},
	price: {
		type: Number,
		required: [true, "Price cannot be emtpy"],
		min: [10, "Price should be more than 10"]
	}
});

const product = mongoose.model("product", ProductSchema);

module.exports = product;

