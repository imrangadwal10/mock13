const UserModel=require("./user.model")
const {Router} = require("express");
const jwt=require("jsonwebtoken")
const app = Router()


app.post("/signup",async(req,res)=>{
           const {name,email,password}=req.body;

       try{
       
         const User= await UserModel.findOne({email})
       
          if(User){
            return res.send("User already exist")
          } 
         
          if(email.includes("@masaischool.com")){
            const user=new UserModel({email:email,password:password,name:name,role:"Admin"});
            await user.save()
          }else{
            const user=new UserModel({email:email,password:password,name:name});
            await user.save()
          }

        return res.status(201).send("user created successfully");
       }catch(e){
        res.send(e.message)
       }
})


app.post("/login",async(req,res)=>{
   const {email,password}=req.body;

   const user=await UserModel.findOne({email,password})

 try{
   
   if(user){
        const token=jwt.sign({id:user._id,email:user.email},"MOCK11",{expiresIn:"7 days"})
        res.send({message:"login successfull",token})
      }else{
       res.status(401).send("invalid credintials")
      }
      }catch(e){
            res.send(e.message)
      }
})

module.exports=app;