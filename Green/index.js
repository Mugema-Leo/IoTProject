const firebaseConfig = {
    apiKey: "AIzaSyDS-9DkMepwiiPqb-fDVm6DHhaEVtzC3ck",
    authDomain: "iotproject-28373.firebaseapp.com",
    projectId: "iotproject-28373",
    storageBucket: "iotproject-28373.appspot.com",
    messagingSenderId: "506465296689",
    appId: "1:506465296689:web:70a0a3f404706060ded010"
  };

//   const app = initializeApp(firebaseConfig);
 firebase.initializeApp(firebaseConfig);
 var database = firebase.database()

 function save(){
    var greenTemperature="27"
    var greenHumidity="80%"
    var greenMoisture="70%"
    var greenDate="12/28/2022,12:58"
    var dryTemperature="36"
    var dryHumidity="30%"
    var dryMoisture="25%"
    var dryDate="12/28/2022,12:58"
    alert("Saved")
    database.ref('citiesData' + greenDate).set({
        greenTemperature:greenTemperature,
        greenHumidity:greenHumidity,
        greenMoisture:greenMoisture,
        greenDate:greenDate,
        dryTemperature:dryTemperature,
        dryHumidity:dryHumidity,
        dryMoisture:dryMoisture,
        dryDate:dryDate

    })
    
    alert("Saved")
 }