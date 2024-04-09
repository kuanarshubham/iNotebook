const express = require('express');
const router = express.Router();
const User = require('../modules/User');
const {login, createUser, getUser} = require('../controllers/auth');
const { body, validationResult, header } = require('express-validator'); //express-validator for valdiation
const fetchUser = require('../middleware/fetchUser');


//Route 1:
//no login req
//Create a user using: "/api/auth/createuser"

router.post('/createuser', [
    body('name', 'Enter a valid name with min 3 char').isLength({min: 3}),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid passsword of min 5 char').isLength({min: 5})

], createUser);


//Route 2:
// login req
// api/auth/login

router.post('/login', [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password can't be blank").exists()

], login);


//Route 3:
//get all the login user details
//login req
//api/auth/getuser

router.post('/getuser', [

    header('auth-token', "Enter a valid token").isJWT()

], fetchUser, getUser);

module.exports = router;