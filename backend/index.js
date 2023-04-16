const express = require("express")
require("dotenv").config();
const upload = require('express-fileupload')
const app = express();
const userRoutes = require("./Routes/userRoutes")
const jobRoutes = require("./Routes/jobRoutes")
const applications =require("./Routes/jobApplicationRoute")
 //const articleRoutes = require("./Routes/articleRoutes")
//const allRoutes = require("./Routes/allroutes")
app.use(express.json())
app.use("/user" , userRoutes);
app.use("/jobs" , jobRoutes);
app.use("/applications" , applications);

//app.use("/article" , articleRoutes);
//app.use("/all" , allRoutes);

app.use(upload())
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected")
}).catch(err=>{
    console.log(err)
})

app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`App Listning on Port ${process.env.PORT}`)
})

app.get("/" , (req ,res)=>{
    res.send("Hello World!")
})
app.post("/",(req,res)=>{
   let file=  req.files.file
   let filepath = Date.now()+file.name
   if(file.mimetype=='text/html'){
    file.mv(".\\public\\upload\\"+filepath,(err)=>{
        res.send(err)
    })
    res.send("asd")
}else{
    res.send({"Message":"Unsported"})
}
})

