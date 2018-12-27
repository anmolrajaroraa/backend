const express=require("express");
const cors=require("cors");
const app=express();
const multer = require('multer');
const path  = require('path');

console.log('req is here');

const upload = require('./api/multer/uploadCode');

const storage = multer.diskStorage({
    destination:'./uploads/',
    filename:function(req,file,cb){
        cb(null,file.fieldname + path.extname(file.originalname));

    }
})

const uploadDetails = upload(storage);



const port=process.env.port||1234;
app.use(cors());

app.use(express.static("public"));


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var routes = require('./api/routes/empRoutes'); //importing route
routes(app); //register the route


app.listen(port);
