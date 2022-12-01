// const express = require('express')
// const mongoose = require("mongoose");
// const path = require("path");
// const dotenv= require("dotenv")
// //require("dotenv").config(); 
// dotenv.config();


// const app = express()
// const port = 3000
// app.use(express.json())
// // mongoose.connect(
// //     process.env.MONGODB_URI, 
// //     {
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true
// //     }
// // );
// const mongoDB ="mongodb+srv://Leo:kigali123@fse.ntax7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// mongoose
//   .connect(mongoDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => console.log("MongoDB Connected..."))
//   .catch((err) => {
//     return app.use((request, response) =>
//       errorResponse(
//         response,
//         500,
//         `Something went wrong! Please try again... ${err}`
//       )
//     );
//   });
  
// const IoTSchema = new mongoose.Schema({
//     greenTemperature: Number,
//     greenHumidity: Number,
//     greenMoisture: Number,
//     dryTemperature: Number,
//     dryHumidity: Number,
//     dryMoisture: Number, 
    
// },{ timestamps: true });

// const ESNG = mongoose.model('ESNG', IoTSchema);

// const iotProject = new ESNG({
//     greenTemperature: 20,
//     greenHumidity: 87,
//     greenMoisture: 96,   
//     dryTemperature: 34,
//     dryHumidity: 67,
//     dryMoisture: 50,
    
// });
// iotProject
//     .save()
//     .then(
//         () => console.log("One entry added"), 
//         (err) => console.log(err)
//     );


// //  async(req,res)=>{
    
// //     try {
// //         const iotProject = new ESNG({
// //             greenTemperature: 20,
// //             greenHumidity: 87,
// //             greenMoisture: 96,   
// //             dryTemperature: 34,
// //             dryHumidity: 67,
// //             dryMoisture: 50,
            
// //         });
// //         console.log('before save');
// //         let saveUser = await iotProject.save(); //when fail its goes to catch
// //         console.log(saveUser); //when success it print.
// //         console.log('after save');
// //       } catch (err) {
// //         console.log('err' + err);
// //         res.status(500).send(err);
// //       }

// //     }


//     app.get('/', (req, res) => {
//         ESNG.find({}, (err, found) => {
//             if (!err) {
//                 res.send(found);
//             }
//             console.log(err);
//             res.send("Some error occured!")
//         }).catch(err => console.log("Error occured, " + err));
//     });

// // app.get('/', (req, res) => {
// //   res.send('Hello World!')
// // })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


const mongoose = require("mongoose");
const express = require('express')
const app = express()
const port = 3000
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
  
// Student model
const ESNG = mongoose.model("ESNG", IoTSchema);
  
// Creating Student document from Model
  
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
  
const start = async () => {
    await iotProject(20, 87,96,34,67,50);
};
  
start();

    app.get('/', (req, res) => {
        ESNG.find({}, (err, found) => {
            if (!err) {
                res.send(found);
            }
            console.log(err);
            res.send("Some error occured!")
        }).catch(err => console.log("Error occured, " + err));
    });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})