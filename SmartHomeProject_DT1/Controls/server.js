const express = require("express");
const mongoose = require('mongoose');
const app = express()

const PORT = 3000;
const HOST = '0.0.0.0'

app.get('/', (req, res) => {
    res.send("Hello Mai")
})


mongoose.connect('mongodb+srv://huyhoang0712:3VIXkfsBfAGNvnDc@dt1projectapi.7q96heu.mongodb.net/?retryWrites=true&w=majority')
.then(()=> {
    console.log('Connected Database!');
    app.listen(PORT, HOST, () =>{
        console.log(`Server is listening on port ${PORT} host ${HOST}`)
    });
})
.catch((error) => {
    console.log(error)
})