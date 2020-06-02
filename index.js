//modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const boekenRoutes = require("./modules/boeken")
const app = express();

// middlewar
app.use(cors());
app.use(express.json())
app.use("/boeken", boekenRoutes);

//routes
app.get("/", (req, res) => {
    res.send("Hello world!");
})

mongoose.connect(
    process.env.CONNECTIONSTRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (error) => {
        if (!error) {
            console.log("Connected to db");
        } else {
            console.log(error);
        }
    }
);

app.listen(3000);
