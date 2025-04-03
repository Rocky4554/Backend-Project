import dotenv from 'dotenv';

// dotenv.config({
//     path:'../.env'
// }); // Load environment variables
dotenv.config(); // Auto-loads from root

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectToDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
        console.log(`"Connected to MongoDB" , ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("ERROR in database connection:", error);
        process.exit(1); // Exit gracefully instead of throwing
    }
};

// Call the function to start the server
// connectToDB();

export default connectToDB;