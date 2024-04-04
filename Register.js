const axios = require('axios');

// Registration details
const registrationDetails = {
    companyName: 'ZOOM Tech',
    clientID: '2808acbe-cabe-474e-8309-531aed7a61ab',
    clientSecret: 'sLWzxLLYhCBXABPU',
    ownerName: 'Pavith Kumar',
    ownerEmail: 'kit.25.21bad038@gmail.com',
    rollNo: '711521bad038'
  };

// Make the POST request to register
axios.post('http://20.244.56.144/test/auth', registrationDetails)
  .then(response => {
    console.log("Registration successful");
    console.log(response.data); // Response from the server
  })
  .catch(error => {
    console.error("Registration failed");
    console.error(error.response.data); // Error response from the server
  });