
const mongoose = require("mongoose");
const express = require('express')
const bodyParser = require('body-parser')
const http = require('http');
const cors = require('cors'); 
const { default: axios } = require('axios');

const app = express()
const port = 4000
const server = http.createServer(app);
//const { Server }   = require('socket.io');
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// Database connection
mongoose.connect("mongodb+srv://Leo:kigali123@fse.ntax7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
  
// Creating Schema
const IoTSchema = new mongoose.Schema({
    greenTemperature: Number,
    greenHumidity: Number,
    greenMoisture: Number,
    dryTemperature: Number,
    dryHumidity: Number,
    dryMoisture: Number, 
    },
    { timestamps: true }
);
  
// data model
const ESNG = mongoose.model("ESNG", IoTSchema);
  
// Creating data document from Model
  
// Function to save in database
const iotProject = async (greenTemperature, greenHumidity,greenMoisture,dryTemperature,dryHumidity,dryMoisture) => {
    let s = new ESNG({
            greenTemperature: greenTemperature,
            greenHumidity: greenHumidity,
            greenMoisture: greenMoisture,   
            dryTemperature: dryTemperature,
            dryHumidity: dryHumidity,
            dryMoisture: dryMoisture,
    });
    s.save().then((doc) => {
        console.log("greenTemperature:", doc.greenTemperature, ", greenHumidity:", doc.greenHumidity);
        console.log("Created At:", doc.createdAt);
        console.log("Updated At:", doc.updatedAt);
    });
};

var value1=21
var value2=80
var value3=70
var value4=54
var value5=89
var value6=100
const start = async () => {
    await iotProject(value1, value2,value3,value4,value5,value6);
};
   
start();

    app.get('/cities/gatsata/', (req, res) => {
        ESNG.find({}, (err, found) => {
            if (!err) {
                res.send(found);
            }
            console.log(err);
            
        }).clone().catch(err => console.log("Error occured, " + err));
    });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})