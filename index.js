const express = require("express");
const {connectToMongoDB} = require('./connect');
const urlRoute = require('./routes/url')

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:').then(() => {console.log('connected to mongodb')});

app.use(express.json());      
app.use('/url',urlRoute);

app.listen(PORT, () => console.log(`Server has started at PORT:{PORT}`))