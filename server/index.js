const express = require('express');
const dotenv = require('dotenv');
const mongoose=require('mongoose')
const User=require('./models/User')
const jwt=require('jsonwebtoken')
const cors=require('cors')

const app = express();
app.use(cors({
    credentials:true,
    origin:process.env.CLIENT_URL
}))

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
console.log(process.env.MONGO_URL);
const jwtSecret=process.env.JWT_SECRET

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async(req, res) => {
const {userName,passowrd}=req.body
const createdUser= await User.create({userName,passowrd})
jwt.sign({userId:createdUser,id},jwtSecret,{},(err,token)=>{
    if(err) throw err;
    res.cookie('token',token).status(201).json('ok');
})
});

const PORT = process.env.PORT || 4000;
app.listen(4000)
