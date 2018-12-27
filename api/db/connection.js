const mongoose=require("mongoose");
const db=require("./config");

mongoose.connect(db.url,()=>{
    console.log('connected to db');
});