import mongoose from "mongoose";

export async function connectDB(){
    try{
        const mongouri = process.env.MONGO_URI;

        if(!mongouri){
            throw new Error("Mongo DB is Required");
        }

        const conn = await mongoose.connect(mongouri);

        console.log("Mongo DB Connected",conn.connection.host);
    }
    catch(error){
        console.error("MongoDB Connection Error:",error);
        process.exit(1);
    }
}