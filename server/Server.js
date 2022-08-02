const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());


mongoose.connect(Your Mongo URL);


app.use("/", require("./routes/noteRoutes"));


app.listen(3001, function(){
    console.log("Runnning on port 3001");
})


