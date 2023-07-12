// recipe.js

var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/step/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const elapsedTime = parseInt(req.query.elapsedTime) || 0;

  // Check if the recipeId is a valid number
  if (isNaN(recipeId)) {
    return res.status(400).send('NOT_FOUND');
  }

  // Find the recipe with the given ID
  const recipe = recipes.find((r) => r.id === recipeId);

  // If no recipe is found with the given ID, return NOT_FOUND
  if (!recipe) {
    return res.status(400).send('NOT_FOUND');
  }

  const { steps, timers } = recipe;
  let currentStepIndex = 0;
  let timePassed = 0;

  // Check if elapsedTime is greater than 0 to proceed with the loop
  if (elapsedTime > 0) {
    for (let i = 0; i < steps.length; i++) {
      // Assign the currentStepIndex only if the timePassed is less than or equal to elapsedTime
      if (timePassed <= elapsedTime) {
        currentStepIndex = i;
      }
      // Accumulate the timePassed using the timers array
      timePassed += timers[i];
    }
  }

  // Respond with the currentStepIndex
  res.json({ index: currentStepIndex });
});
//--------------------------------------------------------------------------------------------------------
module.exports = router;

/* Explanation:*/

var recipes = require('../recipes.json');
var router = require('express').Router();
/*
The recipes variable imports the data from the recipes.json file, which contains an array of recipe objects.
The router variable creates an instance of an Express router using express.Router(). This router will be used to define the /step/:id route.
javascript
Copy code*/

router.get('/step/:id', (req, res) => {
  const recipeId = parseInt(req.params.id);
  const elapsedTime = parseInt(req.query.elapsedTime) || 0;

/*The router.get() method defines the route /step/:id and specifies a callback function to handle the route.
Inside the callback function, the recipeId is extracted from the id parameter of the route, and the elapsedTime is extracted from the elapsedTime query parameter.
The parseInt() function is used to convert the recipeId and elapsedTime values to integers. If the conversion fails or the query parameter is not present, a default value of 0 is used for elapsedTime.
javascript
Copy code*/

if (isNaN(recipeId)) {
  return res.status(400).send('NOT_FOUND');
}

const recipe = recipes.find((r) => r.id === recipeId);

if (!recipe) {
  return res.status(400).send('NOT_FOUND');
}
/*
These lines validate the recipeId by checking if it is a valid number using isNaN(). If it's not a valid number, the server responds with a status code of 400 and sends the string 'NOT_FOUND' in the response body.
The recipes.find() method is used to search for the recipe object in the recipes array that matches the recipeId. If no matching recipe is found, the server responds with a status code of 400 and sends the string 'NOT_FOUND' in the response body.
javascript
Copy code
*/
const { steps, timers } = recipe;
let currentStepIndex = 0;
let timePassed = 0;

if (elapsedTime > 0) {
  for (let i = 0; i < steps.length; i++) {
    if (timePassed <= elapsedTime) {
      currentStepIndex = i;
    }

    timePassed += timers[i];
  }
}
/*
The steps and timers arrays are destructured from the recipe object. These arrays represent the steps and corresponding timers of the recipe.
Variables currentStepIndex and timePassed are initialized to 0.
If the elapsedTime is greater than 0, a loop is entered to iterate through the steps and calculate the currentStepIndex based on the elapsed time.
Inside the loop, if the accumulated timePassed is less than or equal to the elapsedTime, the currentStepIndex is updated to the current iteration index.
The timePassed is incremented by the value from the timers array at the current index.
*/
res.json({ index: currentStepIndex });
/*
The response is sent back to the client as JSON, containing an object with the index property representing the current step index.*/

module.exports = router;/*
The router is exported to be used in other modules.*/