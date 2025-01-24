import express from 'express'
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import cors from "cors";
dotenv.config();
const app = express();

//Using middleware
app.use(express.json());
app.use(cors());

//importing all routes

import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js';

//using routes
app.use("/api/user",userRoutes);
app.use("/api/chat",chatRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on${process.env.PORT}`);
    connectDb();
});