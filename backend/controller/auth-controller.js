//in an express.js app, a controller refers to a part of your code that is responsible for handling the application logic. Controllers are typically used to process incoming requests, interact with model(Data sources), and send responses back to clients. They help organize your application by separating concerns and following the MVC design patterns.

const User = require("../models/User");
const bcrypt = require("bcryptjs");

const home = async(req,res)=>{
    try{
        res
        .status(200)
        .send("welcome to nukkadHelp by chetna and kalyani")

    }catch(error){
        console.log(error);
        
    }

};
// *----------------------------------------------
//*             Registration Logic
//*---------------------------------------------
const register =async (req,res)=>{
    try{
        console.log("Incoming request body:", req.body);
        console.log(req.body);
        const {username, email,phone,password}=req.body;



        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(400).json({message:"email already exists"});
        }

        //const saltRound =10;
        //const hash_password = await bcrypt.hash(password,saltRound);

        const newUser=await User.create({username, email,phone,password});
        res
        .status(201)
        .json({message :"user registered successfully",
            user:newUser,
            token:await newUser.generateToken() ,
            userId:newUser._id.toString(),
        });
    }catch(error){
        console.error("Register error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// *----------------------------------------------
//*             Login Logic
//*---------------------------------------------

const login= async(req,res)=>{
    try{
        const {email, password} = req.body;
        
        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(400).json({message:"Invalid Credentials"})
        }

        const user = await bcrypt.compare(password,userExists.password)
        if (user){
            res.status(200).json({
                msg:"login Successfull",
                token :await userExists.generateToken(),
                userId:userExists._id.toString(),
            })
        }
        else{
            res.status(401).json({message:"Invalid email or password"});
        }


    }
    catch(error){
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

module.exports = {home,register,login};