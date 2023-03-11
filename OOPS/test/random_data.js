const fs = require('fs');

// Function to generate random string of given length
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Function to generate random date in format dd/MM/yyyy
function generateRandomDate() {
  const start = new Date(1990, 0, 1);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const day = randomDate.getDate().toString().padStart(2, '0');
  const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
  const year = randomDate.getFullYear().toString();
  return `${day}/${month}/${year}`;
}

// Function to generate random Indian vehicle number
function generateRandomVehicleNumber() {
  const stateCodes = ['AP', 'AR', 'AS', 'BR', 'CG', 'GA', 'GJ', 'HR', 'HP', 'JK', 'JH', 'KA', 'KL', 'MP', 'MH', 'MN', 'ML', 'MZ', 'NL', 'OD', 'PB', 'RJ', 'SK', 'TN', 'TS', 'TR', 'UP', 'UK', 'WB'];
  const randomNumber = Math.floor(Math.random() * 9999) + 1000;
  const randomStateCode = stateCodes[Math.floor(Math.random() * stateCodes.length)];
  return `KA-${randomNumber}-${randomStateCode}`;
}

// Function to generate random JSON data
function generateRandomData(rows) {
  const data = [];
  for (let i = 1; i <= rows; i++) {
    const productData = {
      productName: generateRandomString(10),
      productCode: generateRandomString(5),
      productPrice: (Math.random() * 1000).toFixed(2),
      productQuantity: Math.floor(Math.random() * 10) + 1,
    };
    const jsonData = {
      ID: i,
      address: generateRandomString(20),
      date_of_supply: generateRandomDate(),
      name: generateRandomString(10),
      place_of_supply: generateRandomString(30),
      product_data: JSON.stringify(productData),
      shipped_to: generateRandomString(30),
      transportantion_mode: generateRandomString(10),
      vehicle_number: generateRandomVehicleNumber(),
    };
    data.push(jsonData);
  }
  return data;
}

// Generate 10,000 rows of random JSON data
const jsonData = generateRandomData(10000);

// Save the JSON data to file
const filePath = './output.json';
fs.writeFileSync(filePath, JSON.stringify(jsonData));

// Print a message to console
console.log(`JSON data saved to ${filePath}.`);
