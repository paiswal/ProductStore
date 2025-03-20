import express from "express";
import { getProducts, createProduct, deleteProduct, updateProduct } from "../controllers/product.controllers.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
