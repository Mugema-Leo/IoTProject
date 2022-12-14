// api url
const api_url = "http://localhost:4000/cities/gatsata/";
var lastgreenTem = 0;
var lastgreenHum = 0;
var lastgreenMo = 0;
var lastdryTem = 0;
var lastdryHum = 0;
var lastdryMo = 0;
var number1 = [];
var number2 = [];
// Defining async function
//  function getapi(url) {
//   // Storing response
//   const response =  fetch(url);
//   // Storing data in form of JSON
//   var data =  response.json();
//   console.log('hello ',data)
//   show(data);
// }
// Calling that async function
//setInterval(getapi(api_url), 1000);
//getapi(api_url)
// Function to hide the loader
function getapi(api_url) {
  setInterval(async () => {
    const response = await fetch(api_url).then((response) => response.json());
    console.log(100);
    show(response);
  }, 1000);
}

getapi(api_url);
// Function to define innerHTML for HTML table
function show(data) {
  let tab = `<thead>
    <tr>
      <th>Temperature</th>
      <th>Humidity</th>
      <th>Moisture</th>
      <th>Date</th>
    </tr>
  </thead>`;

  // Loop to access all rows
  //console.log(data.length);
  lastData = data[data.length - 1];
  lastgreenTem = lastData.greenTemperature;
  lastgreenHum = lastData.greenHumidity;
  lastgreenMo = lastData.greenMoisture;
  showtehgreen( lastgreenTem, lastgreenHum,lastgreenMo)
  number1.push(lastgreenTem);
  number1.push(lastgreenHum);
  number1.push(lastgreenMo);
  //console.log(lastData);
  //lastData.forEach( item =>{
  tab += `<tbody><tr>
	<td>${lastData.greenTemperature} </td>
	<td>${lastData.greenHumidity}</td>
	<td>${lastData.greenMoisture}</td>
	<td>${lastData.createdAt}</td>		
</tr></tbody>`;
  //  })

  // Setting innerHTML as tab variable
  document.getElementById("tempHumidity").innerHTML = tab;
}

// dry data

const api_url2 = "http://localhost:4000/cities/kimirinko/";

// Defining async function
// function getapi2(url) {
//   // Storing response
//   const response =  fetch(url);

//   // Storing data in form of JSON
//   var data =  response.json();

//   dryshow(data);
// }

function getapi2(api_url) {
  setInterval(async () => {
    const response = await fetch(api_url).then((response) => response.json());
   
    dryshow(response);
  }, 1000);
}
// Calling that async function
// setInterval(getapi(api_url), 1000);
getapi2(api_url2);

function dryshow(data) {
  console.log(data);
  let tab = `<thead>
    <tr>
      <th>Temperature</th>
      <th>Humidity</th>
      <th>Moisture</th>
      <th>Date</th>
    </tr>
  </thead>`;

  // Loop to access all rows
  lastData = data[data.length - 1];
  console.log(lastData);
  lastdryTem = lastData.dryTemperature;
  lastdryHum = lastData.dryHumidity;
  lastdryMo = lastData.dryMoisture;
  showtehdry( lastdryTem, lastdryHum,lastdryMo)
  number2.push(lastdryTem);
  number2.push(lastdryHum);
  number2.push(lastdryMo);
  console.log(number2[0])
  
  //  data.forEach((item) => {
  tab += `<tbody><tr>
	<td>${lastData.dryTemperature} </td>
	<td>${lastData.dryHumidity}</td>
	<td>${lastData.dryMoisture}</td>
	<td>${lastData.createdAt}</td>		
</tr></tbody>`;
  // });

  document.getElementById("drytempHumidity").innerHTML = tab;
}

// Historical data
// dry
//  function hisgetapi2(url) {
//   // Storing response
//   const response =  fetch(url);

//   // Storing data in form of JSON
//   var data =  response.json();

//   hisdryshow(data);
// }

function hisgetapi2(api_url) {
  setInterval(async () => {
    const response = await fetch(api_url).then((response) => response.json());
    console.log(100);
    hisdryshow(response);
  }, 1000);
}
// Calling that async function
hisgetapi2(api_url2);

function hisdryshow(data) {
  console.log(data);
  let tab = `<thead>
    <tr>
      <th>Temperature</th>
      <th>Humidity</th>
      <th>Moisture</th>
      <th>Date</th>
    </tr>
  </thead>`;

  // Loop to access all rows
  //lastData = data[data.length-1];
  //console.log(lastData);
  data.forEach((item) => {
    tab += `<tbody><tr>
	<td>${item.dryTemperature} </td>
	<td>${item.dryHumidity}</td>
	<td>${item.dryMoisture}</td>
	<td>${item.createdAt}</td>		
</tr></tbody>`;
  });

  document.getElementById("histdrytempHumidity").innerHTML = tab;
}

// green city

// // Defining async function
//  function higetapi(url) {
//   // Storing response
//   const response =  fetch(url);
//   // Storing data in form of JSON
//   var data =  response.json();

//   hishow(data);
// }
function higetapi(api_url) {
  setInterval(async () => {
    const response = await fetch(api_url).then((response) => response.json());
    console.log(100);
    hishow(response);
  }, 1000);
}
// Calling that async function
//setInterval(getapi(api_url), 1000);
higetapi(api_url);
// Function to hide the loader

// Function to define innerHTML for HTML table
function hishow(data) {
  let tab = `<thead>
    <tr>
      <th>Temperature</th>
      <th>Humidity</th>
      <th>Moisture</th>
      <th>Date</th>
    </tr>
  </thead>`;

  // Loop to access all rows
  //console.log(data.length);
  // lastData = data[data.length-1];
  //console.log(lastData);
  data.forEach((item) => {
    tab += `<tbody><tr>
	<td>${item.greenTemperature} </td>
	<td>${item.greenHumidity}</td>
	<td>${item.greenMoisture}</td>
	<td>${item.createdAt}</td>		
</tr></tbody>`;
  });

  // Setting innerHTML as tab variable
  document.getElementById("histempHumidity").innerHTML = tab;
}

//difference

function diffdryshow(tem, hum, mo) {
  let tab = `<thead>
    <tr>
      <th> Temperature difference</th>
      <th>Humidity difference</th>
      <th>Moisture difference </th>
      
    </tr>
  </thead>`;

  // Loop to access all rows
  // lastData = data[data.length-1];
  // console.log(lastData);
  //  lastdryTem=lastData.dryTemperature
  //  lastdryHum=lastData.dryHumidity
  //  lastdryMo=lastData.dryMoisture
  //  data.forEach((item) => {
  tab += `<tbody><tr>
	<td>${tem} </td>
	<td>${hum}</td>
	<td>${mo}</td>
			
</tr></tbody>`;
  // });

  document.getElementById("difftempHumidity").innerHTML = tab;
};

// var lastgreenTem=0
// var lastgreenHum=0
// var lastgreenMo=0
// var lastdryTem=0
// var lastdryHum=0
// var lastdryMo=0
console.log("here", number1[0]);
console.log(
  "herehhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
);

var t2=0
var h2=0
var m2=0
var dt2=0
var dh2=0
var dm2=0


function showtehgreen( t1, h1,m1){
  t2=t1
  h2=h1
  m2=m1

};

console.log(t2)
console.log(h2)
console.log(m2)

function showtehdry( t1, h1,m1){
  dt2=t1
 dh2=h1
 dm2=m1
//  console.log(t2)
// console.log(h2)
// console.log(m2)
var tem = dt2 - t2;
var hum = h2 - dh2;
var mo = m2 - dm2;
diffdryshow(tem, hum, mo);
  };

// var tem = dt2 - t2;
// var hum = h2 - dh2;
// var mo = m2 - dm2;

