const mongoose=require("mongoose");
const connection=require("../db/connection");

var Schema=mongoose.Schema;
var empSchema=new Schema({
    id:{
        type:String
    },
    name:{
        type: String
    },
    password:{
        type:String
    },
    address:[{
        fulladdress:{
            type: String
        },
        street:{
            type: String  
          },
        city:{
            type: String  
          },
        state:{
            type: String  
          },
        pin_code:{
            type: String  
          }
        }],

    gender:{
        type: String
    }
    ,
    referralCode:{
        type: String
    },
    email:{
        type: String   
     },
    mobile_no:{
        type: String  
      },

    qualification:{
        type: String  
      },
    date_of_birth:{
        type: String  
      },
    typeEmployee:{
        type: String 
       },
    documents:[{
        adhno:{
            type: String,
        },
        bankacno:{
            type: String    },
        pancardno:{
            type: String  
          },
        nominee:{
            type:String
        }
    }],
    policeVerificationImg:{
        data:Buffer,
        contentType:String,
    },
    panCardPhoto:{
        data:Buffer,
        contentType:String,
    }

    

});






module.exports=mongoose.model("Employees",empSchema);