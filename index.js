// const http = require("http");

// const server = http.createServer(function(req, res) {
//     res.end("Hello From Node");
// });

// server.listen(8000);




// const fs = require("fs");

// const target = "target.txt";

// const data = fs.readFileSync(target);

// console.log(data.toString());



// USING EXPRESS
// const express = require("express"); you can use import amd export functionalibity.
import express from "express";
const cors = require("cors");
const mangoose = require("mongoose");
require("dotenv").config();
const app = express();
 
// db 
mangoose.connect(
    process.env.DATABASE, 
    {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    }
).then(() => console.log("DB CONNECTED"))
.catch((err) => console.log("DB CONNECTED ERROR", err));

app.use(cors(
    {origin: ["http://localhost:3000"],}
));


 app.get("/api/users", function (req, res) {
     res.json({
         users: [
            {
                name: "Rohan",
                age: 18,
                gender: "Male",
            },
            {
                name: "balami",
                age: 28,
                gender: "Female",
            }
         ] 
     });
 });

 app.listen(8000, () => console.log("server is running on port 8000"))