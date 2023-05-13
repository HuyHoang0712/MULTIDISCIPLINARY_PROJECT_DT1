const express = require("express");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/user");

const app = express();

// Server Setup
const PORT = 3000;
const HOST = '0.0.0.0'

app.use(express.json());
app.use(cookieParser());



// Connect Database

mongoose.set("strictQuery", false);

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


// Route Setup
app.use("/user", userRouter);

// route
app.get('/', (req, res) => {
    res.send("This is server for Smart Home Project - DT1")
})

// app.get("/users", async(req, res) => {
//     try {
//         const users = await User.find({});
//         res.status(200).json(users);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

// app.get("/users/:id", async(req, res) => {
//     try {
//         const {id} = req.params;
//         const user = await User.findOneAndDelete(id);
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

// app.post('/user', async(req, res) => {
//     try {
//         const user = await User.create(req.body);
//         res.status(200).json(user);

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({message: error.message})
//     }
// })


// // update a user

// app.put("/users/:id", async(req, res) => {
//     try {
//         const {id} = req.params;
//         const user = await User.findByIdAndUpdate(id, req.body);
//         if (!user) {
//             return res.status(404).json({message: `cannot find any user with ID ${id}`})
//         }
//         const updateUser = await User.findById(id)
//         res.status(200).json(updateUser);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })



