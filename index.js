const express=require("express");
const path=require("path");
const cors=require("cors");
const app=express();

console.log('req is here');

const port=process.env.PORT||1234;
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));


const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



var routes = require('./api/routes/empRoutes'); //importing route
routes(app); //register the route

app.use('**',express.static(path.join(__dirname, 'public/error.html')));


app.listen(port);