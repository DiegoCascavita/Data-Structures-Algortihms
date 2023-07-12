// recipes.js
var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 3;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedRecipes = recipes.slice(startIndex, endIndex);

  res.json(paginatedRecipes);
});

module.exports = router;


/*
Certainly! Let's dive deeper into the code snippets and their functionality.

recipes.js:

The recipes.js file exports a router object that handles the /recipes route.
It requires the recipes.json file, which presumably contains an array of recipe objects.
The router is created using the express.Router() function from the Express framework.
The router defines a GET route for /recipes using the router.get() method.
Within the route handler, the query parameters page and limit are extracted from the request using req.query.page and req.query.limit, respectively.
If the page parameter is not provided in the request, it defaults to 1. If the limit parameter is not provided, it defaults to 3.
The starting and ending indexes for pagination are calculated based on the page and limit values.
The recipes array is sliced using the calculated indexes to retrieve the desired page of recipes.
Finally, the paginated recipes are sent as a JSON response using res.json().
app.js:

The app.js file sets up the main Express application.
It requires necessary dependencies such as express, path, cookie-parser, and morgan.
It imports the router objects from ./routes/index and ./routes/recipes using require().
The application is created using express() and stored in the app variable.
Various middleware functions are applied using app.use() to handle logging, parsing JSON and URL-encoded data, cookie parsing, and serving static files from the public directory.
The routers are mounted on specific routes using app.use(). The indexRouter is mounted at '/' and the recipeRouter is mounted at '/recipes'.
Finally, the app object is exported to be used by other modules.
By organizing the code this way, you can separate different routes into their own files (index.js and recipes.js in this case) for better code organization and maintainability. The app.js file acts as the entry point for your Express application and brings all the components together.

When you run your Node.js application and make a GET request to /recipes, the server will respond with a paginated list of recipes based on the provided or default values for page and limit query parameters.

For example:

A request to /recipes will return the first page of recipes with the default limit of 3.
A request to /recipes?page=1&limit=2 will return the first page with a limit of 2.
A request to /recipes?page=2&limit=3 will return the second page with a limit of 3
*/