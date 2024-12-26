import mongoose from "mongoose";

export async function Connect(){
    try{
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("Connected to MongoDB");
        const connection=mongoose.connection;
        connection.on('connected',()=>{
            console.log("Connected to MongoDB successfully ");
        })

        connection.on('error',(err)=>{
            console.log("Error connecting to MongoDB",err);
            process.exit();

        })
    }catch(err){
            console.log("Something went Wrong");
            console.log(err);
            }
    
}