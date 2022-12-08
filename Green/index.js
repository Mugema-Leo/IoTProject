// api url
const api_url = "http://localhost:4000/cities/gatsata/";

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  var data = await response.json();

  show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader

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
  lastData = data[data.length-1];
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
async function getapi2(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();

  
  dryshow(data);
}
// Calling that async function
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
  lastData = data[data.length-1];
  console.log(lastData);
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
