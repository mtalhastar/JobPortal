const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:30
    },
    name:{
        type:String
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum: ['employer', 'student','placement','admin'],
        required: true
    },
    images:{
        type:[String]
    }
}
,{timestamps:true}
)

module.exports = mongoose.model("User" , UserSchema);