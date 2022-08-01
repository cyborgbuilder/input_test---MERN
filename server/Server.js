const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://admin:RBrTZAc2xXQ1B3r0@cluster0.waeic8y.mongodb.net/?retryWrites=true&w=majority")


app.use("/", require("./routes/noteRoutes"));


app.listen(3001, function(){
    console.log("Runnning on port 3001");
})


