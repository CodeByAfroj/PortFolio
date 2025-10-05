import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/UserRoute.js";
import cors from "cors"
const app = express();

dotenv.config();
const PORT=process.env.PORT||5000;
const MONGO_URL=process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("Database connected")
    app.listen(PORT,()=>{
        console.log(`server running at port ${PORT}`)
    })
})
.catch((error)=>console.log(error));


app.use("/api",route)
