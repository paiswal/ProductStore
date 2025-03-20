import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Ensures price is not negative
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps automatically
);

const Product = mongoose.model("Product", productSchema);

export default Product;
