const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

//setup express
const app = express();
mongoose.connect('mongodb+srv://ronak:luv2lafok@cluster0-e5plc.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;
//setup middeleware and routes
app.use(bodyparser.json());
app.use('/api',require('./routes/api'));

app.get('/',(req,res)=>{
    res.send("its working...!")
})

//start server
app.listen(process.env.PORT||8080, () => console.log("Server Started on port 4000"));