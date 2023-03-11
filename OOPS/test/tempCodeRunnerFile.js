// Define the number of rows to generate
const num_rows = 10000;

// Define a function to generate a random date
function generateDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date(2023, 2, 11);
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toISOString().slice(0, 10);
}

// Define a function to generate a random address
function generateAddress() {
  const streets = ['Main Street', 'First Street', 'Second Street', 'Third Street', 'Park Avenue', 'Maple Street', 'Oak Street', 'Pine Street', 'Elm Street', 'Church Street', 'Washington Street', 'Broadway', 'Center Street', 'High Street', 'School Street', 'Chestnut Street', 'Water Street', 'Market Street', 'Franklin Street', 'Union Street'];
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'San Francisco', 'Charlotte', 'Indianapolis', 'Seattle', 'Denver', 'Boston'];
  const randomStreet = streets[Math.floor(Math.random() * streets.length)];
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const randomZip = Math.floor(Math.random() * 90000) + 10000;
  return `${randomStreet}, ${randomCity}, ${randomZip}`;
}

// Define a function to generate a random full name
function generateFullName() {
  const firstNames = ['Emily', 'Olivia', 'Emma', 'Ava', 'Sophia', 'Isabella', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn', 'Abigail', 'Emily', 'Elizabeth', 'Sofia', 'Ella', 'Madison', 'Scarlett', 'Victoria', 'Aria'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Perez', 'Taylor', 'Anderson', 'Wilson', 'Jackson', 'Wright', 'White'];
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

// Define a function to generate a random product list
function generateProducts() {
  const num_products = Math.floor(Math.random() * 5) + 1;
  const products = [];
  const productNames = ['iPhone', 'Samsung Galaxy', 'Google Pixel', 'LG G8', 'Huawei P30 Pro', 'OnePlus 7T', 'Sony Xperia', 'Xiaomi Redmi', 'Nokia 9 PureView', 'Motorola Moto G7'];
  for (let i = 0; i < num_products; i++) {
    const product = {
      name: productNames[Math.floor(Math.random() * productNames.length)],
      price: Math.floor(Math.random() * 50000) + 10000,
      quantity: Math.floor(Math.random() * 10) + 1
    };
    products.push(product);
  }
  return
}

function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  function getRandomAddress() {
    const addresses = [
      "123 Main St",
      "456 Elm St",
      "789 Oak St",
      "321 Maple Ave",
      "654 Pine Rd",
      "987 Cedar Ln",
      "741 Birch Dr",
      "852 Walnut Blvd",
      "369 Chestnut St",
      "258 Cherry Ln"
    ];
    return addresses[Math.floor(Math.random() * addresses.length)];
  }
  
  function getRandomFullName() {
    const firstNames = ["John", "Jane", "Bob", "Sue", "Tom", "Liz", "Mike", "Amy", "Tim", "Lisa"];
    const lastNames = ["Smith", "Jones", "Brown", "Taylor", "Davis", "Wilson", "Moore", "Clark", "Lee", "Hall"];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
  }
  
  function getRandomProducts() {
    const products = ["Product A", "Product B", "Product C", "Product D", "Product E"];
    const productData = [];
    for (let i = 0; i < 3; i++) {
      const product = products[Math.floor(Math.random() * products.length)];
      const quantity = Math.floor(Math.random() * 10) + 1;
      const per = ["kg", "lbs", "units"][Math.floor(Math.random() * 3)];
      productData.push({ product, quantity, per });
    }
    return productData;
  }
  
  function getRandomIndianVehicleNumber() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const firstPart = `${letters[Math.floor(Math.random() * 26)]}${letters[Math.floor(Math.random() * 26)]}`;
    const secondPart = `${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
    const thirdPart = `${letters[Math.floor(Math.random() * 26)]}${letters[Math.floor(Math.random() * 26)]}${letters[Math.floor(Math.random() * 26)]}`;
    return `${firstPart} ${secondPart} ${thirdPart}`;
  }
  
  const data = [];
  for (let i = 1; i <= 10000; i++) {
    const id = i;
    const dateOfSupply = getRandomDate(new Date(2019, 0, 1), new Date());
    const placeOfSupply = getRandomAddress();
    const name = getRandomFullName();
    const productData = getRandomProducts();
    const quantity = `${Math.floor(Math.random() * 10) + 1}`;
    const per = ["kg", "lbs", "units"][Math.floor(Math.random() * 3)];
    const vehicleNumber = getRandomIndianVehicleNumber();
    const row = { id, dateOfSupply, placeOfSupply, name, productData, quantity, per, vehicleNumber };
    data.push(row);
  }
  
  const jsonString = JSON.stringify(data);
  console.log(jsonString);
  