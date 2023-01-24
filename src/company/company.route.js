const {Router} = require("express");
const app = Router()
const CompanyModel=require("./company.model")


app.post("/addjobs",async(req,res)=>{

  try{
        const job=new CompanyModel(req.body)
        await job.save()
        res.send({job:job,message:"Job posted successfully"})
       }catch(e){
             res.send(e.message)
       }
 })
app.get("/getjobs",async(req,res)=>{
  try{
        const job=await CompanyModel.find()
        res.send({job:job})
       }catch(e){
             res.send(e.message)
       }
 })
app.delete("/deletejob/:id",async(req,res)=>{
          const {id} =req.params
  try{
        const job=await CompanyModel.deleteOne({_id:id})
        res.send({job:job})
       }catch(e){
             res.send(e.message)
       }
 })




 module.exports=app;