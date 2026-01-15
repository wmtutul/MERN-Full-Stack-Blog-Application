import express  from "express";
import connectDB from "./database_conection/db.js";
import dotenv from "dotenv";
import userRoute from "./src/routes/user.route.js";


dotenv.config();

const app = express();



 
//API calling 
app.use("/api/v1/user", userRoute);



 
//Database Connection
const PORT = process.env.PORT || 7000;
app.listen(PORT, ()=>{
        connectDB();
        console.log(`Server is running on port: http://localhost:${PORT}`)
})
