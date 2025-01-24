import mongoose from 'mongoose';

const connectDb = async() =>{

    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "Chat_With_GenimiAI"
            
        });
        console.log("Mongodb connected");
    }catch(error){
        console.log('MONGODB CONNECTION ERROR',error);
    }
};
export default connectDb;