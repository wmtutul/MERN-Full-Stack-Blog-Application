import express from "express";
import connectDB from "./database_conection/db.js";
import dotenv from "dotenv";
import userRoute from "./src/routes/user.route.js";
import blogRoute from "./src/routes/blog.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();


//====== Middleware ===============

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//====== API Routing ==================

app.use("/api/v1/user", userRoute);
app.use("/api/v1/blog", blogRoute);



//======Database Connectivity============

const PORT = process.env.PORT || 7000;
connectDB();

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



