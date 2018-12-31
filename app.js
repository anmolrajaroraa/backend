const express=require("express");
const cors=require("cors");
const app=express();

console.log('req is here');

const port=process.env.port||1234;
app.use(cors());

app.use(express.static("public"));


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var routes = require('./api/routes/empRoutes'); //importing route
routes(app); //register the route


app.listen(port);