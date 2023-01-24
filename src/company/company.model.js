const {Schema,model}=require("mongoose");

const CompanySchema=new Schema({
    companyname:String,
    position:String,
    contract:String,
    location:String
})

const CompanyModel=model("company",CompanySchema)

module.exports=CompanyModel;