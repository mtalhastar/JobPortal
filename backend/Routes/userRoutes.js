const { signup } = require("../Controller/userController");
const { login,updateProfile,getAllUsers } = require("../Controller/userController");
const {DecodeUser,checkAdmin, checkStudent}=require("../middleware/auth")
const userRoutes = require("express").Router();

userRoutes.post("/login",login)
userRoutes.get("/all",getAllUsers)
userRoutes.post("/signup",signup)
userRoutes.put("/updateProfile",DecodeUser,updateProfile)

userRoutes.get("/", DecodeUser, checkAdmin,  (req, res)=>{
    res.status(200).json({"Message": "User Authorized"})
})

userRoutes.get("/student", DecodeUser, checkStudent,  (req, res)=>{
    res.status(200).json({"Message": "User Authorized"})
})

module.exports = userRoutes;