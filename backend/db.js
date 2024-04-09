const mongoose = require('mongoose');
const { exit } = require('node:process');

const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true";

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error);
        process.exit();
    }
}


module.exports = connectToMongo;


// const pg = require('pg');

// const db = new pg.Client({
//     user: "postgres",
//     password: "Gunu@1234",
//     port: 5432,
//     database: "inotebook",
//     host: "localhost"
// });

// const dbConnect = ()=>{
//     db.connect();
//     console.log("Postgres is connected");
// }

// module.exports = dbConnect;