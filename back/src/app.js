import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./utils/dbCon.js";
import cors from 'cors';
import routerCategories from "./routes/categories.routes.js";
import routerProduct from "./routes/product.routes.js";
// importaciones de rutas


// inicializaciones
const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// rutas definidas
app.use('/api/categories', routerCategories);
app.use('/api/product', routerProduct);
// test de funcionamiento
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Bienvenido a zentra uwuwuwuwuwuwuwuwuwu"
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT} 😖`)
})

export default app;
