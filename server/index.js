const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://davidvaldez84:societyisahole84@cluster0.ie8e5uf.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res)=>{
    const {username, password} = req.body;
    const userDoc = await User.create({username, password})
    res.json(userDoc);
});

const port = 4000;

app.listen(port, ()=>{
    console.log('You are listening on port ' + port);
});


