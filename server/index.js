import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



// In case we wanted to seperate the routes
import kpiRoutes from "./routes/kpi.js";
import KPI from "./models/KPI.js";
import { kpis, products, transactions } from "./data/data.js"; // <-- grabbing the data in dummy data 
// import productRoutes from "./routes/product.js";
// import transactionRoutes from "./routes/transaction.js";
// import Product from "./models/Product.js";
// import Transaction from "./models/Transaction.js";

console.log("Hello world!");

/* ROUTES */
app.use("/kpi", kpiRoutes); // <----------- Entry point for our kpi routes (import kpiRoutes from "./routes/kpi.js";)
// app.use("/product", productRoutes);
// app.use("/transaction", transactionRoutes);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000; //back up port just in case
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA WHENEVER NECESSARY */
    // await mongoose.connect.db.dropDatabase();// <------------- Dropping any database that already exists (kinda like a CLEAR SCREEN)
    // KPI.insertMany(kpis);                    // <------------- Inserting kpis we exported from dummy data
  })
  .catch((error) => console.log(`${error} did not connect`));