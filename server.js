const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

const employeeRoute = require('./routes/employee_routes');


const app = express();

const port = process.env.port || 5000;

dotenv.config()
app.use(bodyparser.json())

mongoose.connect(process.env.MONGO_URI)
    .then(()=>
    {
        console.log("Mongodb connected successfully..!");
    })

    .catch((error)=>
    {
        console.log("error : ", error);
    })

app.use('/employees', employeeRoute)

app.listen(port, ()=>
{
    console.log(`Server started and running successfully at ${port}..!`);
})

