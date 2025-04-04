﻿import dotenv from 'dotenv';

// // dotenv.config({
// //     path:'../.env'
// // }); // Load environment variables
dotenv.config(); // Auto-loads from root

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectToDB from './db/index.js';

// const app = express();

// const connectToDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
//         console.log("Connected to MongoDB");

//         app.listen(process.env.PORT || 3000, () => {
//             console.log(`App is listening on port ${process.env.PORT || 3000}`);
//         });

//         // Handle server errors
//         app.on("error", (error) => {
//             console.error("Server error:", error);
//             process.exit(1);
//         });
//     } catch (error) {
//         console.error("ERROR in database connection:", error);
//         process.exit(1); // Exit gracefully instead of throwing
//     }
// };

// // Call the function to start the server
connectToDB();