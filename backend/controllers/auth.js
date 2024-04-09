const { body, validationResult } = require('express-validator'); //express-validator for valdiation
const bcrypt = require('bcryptjs');  //pasword encryption using salting and hashing
const jwt = require('jsonwebtoken');  //for authenticaion using jwt(json web token)
const User = require('../modules/User');

const JWT_SECRET = "shubhamJWTauth";
var sucess = false;

const login = async (req, res) => {

    const error = validationResult(req);

    if(!(error.isEmpty())){
        res.status(400).json({error: error.array()});
    }

    const { email, password } = req.body;
    console.log("email and password is okey");

    try{
        let user = await User.findOne({email});

        if(!user){
            console.log("User is not present");
            return res.json({error: "Please login with correct credentials"});
        }

        const checkPass = bcrypt.compareSync(password, user.password);
        
        if(!checkPass){
            console.log("Checked password => wrong");
            return res.status(400).json({sucess, error: "Please login with correct credentials"});
        }

        const data = {
            user:{
                id: user.id
            }
        }

        const token = jwt.sign(data, JWT_SECRET);
        res.json({sucess:true, token});

    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Some error occured at server");
    }

}

const createUser = async (req, res)=>{ 

    const error = validationResult(req);

    if(!(error.isEmpty())){
        res.status(400).json({error: error.array()});
    }

    try{
        let user = await User.findOne({email: req.body.email});

        if(user){
            return res.status(400).send({error: "Email alreday exists"});
        }

        const salt = await bcrypt.genSaltSync(10);
        const secPass = await bcrypt.hashSync(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        const data = {
            user:{
                id: user.id
            }
        }

        const token = jwt.sign(data, JWT_SECRET);

        // .then(User => res.json(User))

        // .catch(err => {console.log(err)
        //     res.json({error: "Please send a unique value for email"})}
        // );

        res.status(200).json({sucess: true, token});
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Some error occured");
    }
}

const getUser = async (req, res) => {
    
    try{
        const userId =  req.user.id;
        const user = await User.findById(userId).select("-password");
        res.json(user);  
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Some error occured");
    }
} 

module.exports = {login, createUser, getUser};