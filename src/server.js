import mongoose from 'mongoose';
import app from './app.js';
import { config } from './config/congif.js';

const DbConnectMain = async()=>{
    try{
        await mongoose.connect(config.db_url);
    console.log("Connnect DB")
    app.listen(config.port, ()=>{
        console.log("This Server is Connects")
    })
    }catch(err){
        console.error(err)
    }
}

DbConnectMain()