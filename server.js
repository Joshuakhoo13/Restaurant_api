// 1. Import Express (bring in the tool we installed)
const express = require('express');

// 2. Create an "app" - this is your server
const app = express();

// 3. Choose a port number (like a door number for your server)
const PORT = 3000;

// 4. ENDPOINT #1: Returns "Server is running!"
// When someone visits http://localhost:3000/ they'll see this
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// 5. ENDPOINT #2: Returns a list of 3 restaurants
// When someone visits http://localhost:3000/restaurants they'll see this
app.get('/restaurants', (req, res) => {
  // This is our hardcoded list of restaurants
  const restaurants = [
    {
      id: 1,
      name: "Pizza Paradise",
      cuisine: "Italian"
    },
    {
      id: 2,
      name: "Burger Barn",
      cuisine: "American"
    },
    {
      id: 3,
      name: "Sushi Station",
      cuisine: "Japanese"
    }
  ];
  
  // Send the list back as JSON (a format that's easy to read)
  res.json(restaurants);
});

// 6. Start the server (turn it on and make it listen)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Try visiting:`);
  console.log(`- http://localhost:${PORT}/`);
  console.log(`- http://localhost:${PORT}/restaurants`);
});