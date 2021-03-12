import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); //dotenv안에 있는 정보를 불러옴

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected to MongoDB');
const handleError = error => console.log(`❌ Error on DB : ${error}`);

db.once('open', handleOpen);
db.on('error', handleError);

