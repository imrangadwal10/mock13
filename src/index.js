const express = require("express");
const connect=require("./config/connect")
const cors = require("cors");
const userRoute = require("./user/user.route")
const companyRoute=require("./company/company.route")
const app = express();
const PORT = 7000;

app.use(cors());
app.use(express.json())

 app.use('/user', userRoute)
 app.use('/company', companyRoute)


app.get("/", (req, res) => {
    res.status(200).send("Hello")
})


app.listen(PORT, async () => {
     await connect()
    console.log(`server started on port ${PORT}`)
})