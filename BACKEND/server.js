import express from 'express';
import dotenv from 'dotenv';
import path from 'path'
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 

const __dirname = path.resolve();
app.use("/api/products", productRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"/FRONTEND/dist")));
    app.get("*" ,(req,res) => {
        res.sendFile(path.resolve(__dirname,"FRONTEND" , "dist" , "index.html"))

    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

