const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb+srv://davidvaldez84:societyisahole84@cluster0.ie8e5uf.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res)=>{
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({username, password});
        res.json(userDoc);
    }
    catch (e) {
        res.status(400).json(e);
        console.log(e);
    }
});

app.listen(4000);


