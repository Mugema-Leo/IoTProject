
const mongoose = require("mongoose");
const express = require('express')
const bodyParser = require('body-parser')
const http = require('http');
const cors = require('cors'); 
//const io = require('socket.io')();
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
  
// Creating Schema green
const IoTSchema = new mongoose.Schema({
    greenTemperature: Number,
    greenHumidity: Number,
    greenMoisture: Number,
    
    },
    { timestamps: true }
);

// Creating Schema dry
const IoTSchemaDry = new mongoose.Schema({
    dryTemperature: Number,
    dryHumidity: Number,
    dryMoisture: Number, 
    },
    { timestamps: true }
);

// data model for Green
const ESNGgreen = mongoose.model("ESNGgreen", IoTSchema);

// data model for dry
const ESNGdry = mongoose.model("ESNGdry", IoTSchemaDry);
  
// Creating data document from Model
  
// Function to save in database Green
const iotProject = async (greenTemperature, greenHumidity,greenMoisture) => {
    let s = new ESNGgreen({
            greenTemperature: greenTemperature,
            greenHumidity: greenHumidity,
            greenMoisture: greenMoisture,   
           
    });
    s.save().then((doc) => {
        console.log("greenTemperature:", doc.greenTemperature, ", greenHumidity:", doc.greenHumidity);
        console.log("Created At:", doc.createdAt);
        console.log("Updated At:", doc.updatedAt);
    });
};

var value1=27
var value2=20
var value3=70

const start = async () => {
    await iotProject(value1, value2,value3);
};
   
start();

    app.get('/cities/gatsata/', (req, res) => {
        ESNGgreen.find({}, (err, found) => {
            if (!err) {
                res.send(found);
            }
            console.log(err);
            
        }).clone().catch(err => console.log("Error occured, " + err));
    });


// dry schema

// Function to save in database Green
const iotProjectdry = async (dryTemperature,dryHumidity,dryMoisture) => {
    let s = new ESNGdry({
           
            dryTemperature: dryTemperature,
            dryHumidity: dryHumidity,
            dryMoisture: dryMoisture,
    });
    s.save().then((doc) => {
        console.log("dryTemperature:", doc.dryTemperature, ", dryHumidity:", doc.dryHumidity);
        console.log("Created At:", doc.createdAt);
        console.log("Updated At:", doc.updatedAt);
    });
};

var value4=20
var value5=30
var value6=100
const start2 = async () => {
    await iotProjectdry(value4,value5,value6);
};
   
start2();

    app.get('/cities/kimirinko/', (req, res) => {
        ESNGdry.find({}, (err, found) => {
            if (!err) {
                res.send(found);
            }
            console.log(err);
            
        }).clone().catch(err => console.log("Error occured, " + err));
    });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})