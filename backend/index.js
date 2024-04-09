const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();

const app = express()
const port = 5000;


app.use(cors())

app.use(express.json()); //used so as to show json using req.body at console

app.use('/api/auth', require('./routes/auth')); //middleware for auth routes path
app.use('/api/notes', require('./routes/notes')); //middleware for notes route path


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})