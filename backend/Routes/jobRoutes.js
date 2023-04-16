const {createJob,updateJob,getAllJobs, getEmployerJobs, searchJobs}=require("../Controller/jobController")
const jobRoutes = require("express").Router();
const {DecodeUser,checkEmployer,checkStudent}=require("../middleware/auth")

jobRoutes.post("/addJob",DecodeUser,checkEmployer,createJob)
jobRoutes.put("/updateJob/:id",DecodeUser,checkEmployer,updateJob)
jobRoutes.get("/getAllJobs",DecodeUser,checkStudent,getAllJobs)
jobRoutes.get("/searchJob",DecodeUser,checkStudent,searchJobs)
jobRoutes.get("/getEmployerjob",DecodeUser,checkEmployer,getEmployerJobs)

module.exports=jobRoutes