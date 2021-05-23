// import Express libraries and routes
import express from 'express';
import routes from './source/routes/route.js';

// var express = require('express');

// constant variables 
const app = express();
const PORT = 3000;

// body parser setup for Express v4.16.0 and higher
app.use(express.json());
app.use(express.urlencoded(
	{
  		extended: true
	}
));

// use our routes function and then pass app, which is the Express library
routes(app);

app.get('/', (request, response) =>
  response.send(`NodeJS express server is running on port ${PORT}`)
);

// Setting the server to listen at port 3000
app.listen(PORT, function () {
  console.log(`Node JS express server is running on port http://localhost:${PORT}`);
});
