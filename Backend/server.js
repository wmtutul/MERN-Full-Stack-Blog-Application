import express  from "express";
import connectDB from "./database_conection/db.js";
import dotenv from "dotenv";


const app = express();
dotenv.config();



//Database Connection
const PORT = process.env.PORT || 7000;
app.listen(PORT, ()=>{
        connectDB();
        console.log(`Server is running on port: http://localhost:${PORT}`)
})

 