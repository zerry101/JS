

const fs = require("fs");

// const fs = require("fs");
function pad(number) {
  if (number < 10) {
    return '0' + number;
  }
  return number;
}

function formatDate(date) {
  const year = date.getFullYear().toString();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  const second = pad(date.getSeconds());
  const millisecond = pad(date.getMilliseconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`;
}

function generateRandomData() {
  const data = [];
  const idStart = 100000000000;
  const idEnd = 999999999999;
  const names = ["John", "Jane", "Bob", "Alice", "Mike", "Emily", "Tom", "Lucy", "Mark", "Sarah"];
  const places = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];

  for (let i = 0; i < 100; i++) {
    const id = Math.floor(Math.random() * (idEnd - idStart + 1)) + idStart;
    const name = names[Math.floor(Math.random() * names.length)];
    const address = `${Math.floor(Math.random() * 9999) + 1} ${name} Street, ${places[Math.floor(Math.random() * places.length)]}`;
    const contact_no = Math.floor(Math.random() * 10000000000);
    const date_of_supply = new Date(Math.floor(Math.random() * (new Date().getTime() - new Date(2015, 0, 1).getTime())) + new Date(2015, 0, 1).getTime());
    const grand_total = Math.floor(Math.random() * 100000).toString();
    const place_of_supply = places[Math.floor(Math.random() * places.length)];
    const shipped_to = `${Math.floor(Math.random() * 9999) + 1} ${names[Math.floor(Math.random() * names.length)]} Street, ${places[Math.floor(Math.random() * places.length)]}`;
    const transportation_mode = ["Air", "Rail", "Road", "Sea"][Math.floor(Math.random() * 4)];
    const vehicle_number = `${String.fromCharCode(Math.floor(Math.random() * 26) + 65)}${String.fromCharCode(Math.floor(Math.random() * 26) + 65)} ${Math.floor(Math.random() * 9999) + 1}`;
    const product_data = [
      {
        Amount: 26397,
        Description: "BjKUo",
        HSN: 1550,
        Per: 3,
        Quantity: 419,
        Rate: 21
      },
      {
        Amount: 13657,
        Description: "xroxb",
        HSN: 2122,
        Per: 5,
        Quantity: 372,
        Rate: 73
      },
      {
        Amount: 30851,
        Description: "nbfhy",
        HSN: 3583,
        Per: 7,
        Quantity: 415,
        Rate: 74
      },
      // ... and so on for the other product items
    ];

    data.push({
      id: id,
      address: address,
      contact_no: contact_no,
      date_of_supply: formatDate(date_of_supply),
      grand_total: grand_total,


      name: name,
      place_of_supply: place_of_supply,
      shipped_to: shipped_to,
      transportation_mode: transportation_mode,
      vehicle_number: vehicle_number,
      product_data: JSON.stringify(product_data)
    });
  }

  return data;
}




const randomData = generateRandomData();
// console.log(randomData); 
const outputFilePath = "data.json";

fs.writeFile(outputFilePath, JSON.stringify(randomData, null, 2), err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Output saved to ${outputFilePath}`);
  }
});