var express = require('express');
var router = express.Router();
var recipes = require('../recipes.json'); // Import the recipes data

// Handle GET request to /recipes/shopping-list
router.get('/shopping-list', (req, res) => {
  const { ids } = req.query; // Get the "ids" query parameter from the request

  if (!ids) {
    return res.status(400).send(); // Return 400 status if "ids" parameter is blank or not present
  }

  const recipeIds = ids.split(','); // Split the "ids" string into an array of individual IDs

  // Filter the recipes to find matching recipes based on the provided IDs
  const matchingRecipes = recipes.filter(recipe => recipeIds.includes(String(recipe.id)));

  if (matchingRecipes.length === 0) {
    return res.status(404).send('NOT_FOUND'); // Return 404 status with "NOT_FOUND" message if no matching recipes are found
  }

  // Aggregate the ingredients from the matching recipes into a single array
  const aggregatedIngredients = matchingRecipes.reduce((ingredients, recipe) => {
    return ingredients.concat(recipe.ingredients);
  }, []);

  res.json(aggregatedIngredients); // Send the aggregated ingredients as JSON response
});

module.exports = router;

//-----------------------------------------------------------------------------------------------
var express = require('express');
var router = express.Router();
var recipes = require('../recipes.json'); // Import the recipes data
/*
The code starts by importing the necessary dependencies: express and the express.Router() function.
It also imports the recipes data from the recipes.json file. This assumes that the recipes.json file is located in the same directory as the recipes.js file.
javascript
Copy code*/

router.get('/shopping-list', (req, res) => {
  const { ids } = req.query; // Get the "ids" query parameter from the request

  if (!ids) {
    return res.status(400).send(); // Return 400 status if "ids" parameter is blank or not present
  }

  const recipeIds = ids.split(','); // Split the "ids" string into an array of individual IDs

  // Filter the recipes to find matching recipes based on the provided IDs
  const matchingRecipes = recipes.filter(recipe => recipeIds.includes(String(recipe.id)));

  if (matchingRecipes.length === 0) {
    return res.status(404).send('NOT_FOUND'); // Return 404 status with "NOT_FOUND" message if no matching recipes are found
  }

  // Aggregate the ingredients from the matching recipes into a single array
  const aggregatedIngredients = matchingRecipes.reduce((ingredients, recipe) => {
    return ingredients.concat(recipe.ingredients);
  }, []);

  res.json(aggregatedIngredients); // Send the aggregated ingredients as JSON response
});
/*
The code defines a GET route handler for the /shopping-list path using router.get().
Inside the route handler, it retrieves the value of the ids query parameter from the request using req.query.ids.
It checks if the ids parameter is blank or not present. If it is, the code returns a 400 status code using res.status(400).send() to indicate a bad request.
If the ids parameter is provided, the code splits the string of IDs into an array of individual IDs using ids.split(',').
It then filters the recipes array to find the recipes that have IDs matching the provided IDs using recipes.filter(). The recipeIds.includes() method is used to check for the presence of a recipe ID in the provided array of IDs.
If no matching recipes are found, the code returns a 404 status code with the message 'NOT_FOUND' using res.status(404).send('NOT_FOUND').
If there are matching recipes, the code aggregates the ingredients from the matching recipes into a single array using Array.prototype.reduce(). The ingredients.concat() method is used to concatenate the ingredients arrays from each recipe.
Finally, the code sends the aggregated ingredients as a JSON response using res.json(aggregatedIngredients).
javascript
Copy code*/
module.exports = router;/*
The code exports the router instance, which contains the defined routes, to make it accessible from other files that require/import recipes.js.
By combining these sections, the recipes.js file sets up a route handler for the /shopping-list path. It retrieves the provided recipe IDs from the query parameters, filters the recipes based on the IDs, aggregates the ingredients from the matching recipes, and sends the aggregated ingredients as a JSON response.
*/