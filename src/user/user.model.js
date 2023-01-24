const {Schema,model}=require("mongoose");

const UserSchema=new Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    password:String,
    role:{
        type:String,
        enum:["Admin","User"],
        default:"User"
    }
})

const UserModel=model("user",UserSchema)

module.exports=UserModel;