const jwt = require('jsonwebtoken');  //for authenticaion using jwt(json web token)

const JWT_SECRET = "shubhamJWTauth";

const fetchUser = (req, res, next) => {

    const token = req.header('auth-token');

    if (!token) {
        return res.status(401).json({ error: "Enter a valid token" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    }
    catch(error){
        console.log("fetchUser", err.message);
        res.status(401).send("Some error occured");
    }
}

module.exports = fetchUser;