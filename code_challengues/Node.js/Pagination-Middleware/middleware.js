// middleware.js

module.exports = (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const searchTerm = req.query.q || '';
    const skip = (page - 1) * limit;
    const search = new RegExp(searchTerm, 'gi');
  
    req.context = {
      page,
      limit,
      skip,
      searchTerm,
      search,
    };
  
    next();
  };

//-------------------------------------------------------------------------------
  
/*
javascript
Copy code*/
module.exports = (req, res, next) => {}
/*
The module.exports statement is used to export the middleware function as a module. It allows other files to import and use this function. The function takes three parameters: req (request object), res (response object), and next (callback function to pass control to the next middleware).
*/
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 3;
const searchTerm = req.query.q || '';
const skip = (page - 1) * limit;
const search = new RegExp(searchTerm, 'gi');
/*
These lines extract the necessary query parameters from the req.query object. page, limit, and q are extracted using destructuring assignment.
parseInt() is used to convert the query parameter values to integers. If the conversion fails or the parameter is not present, the default values of 1 for page and 3 for limit are used.
searchTerm is set to the value of the q query parameter, or an empty string if it's not present.
skip is calculated by subtracting 1 from page and multiplying it by limit. It represents the number of items to skip when fetching data.
search is created as a regular expression (RegExp) with the searchTerm as the pattern and the gi flags for a global search (match all occurrences) and case-insensitive matching.
javascript
Copy code*/

req.context = {
  page,
  limit,
  skip,
  searchTerm,
  search,
};
/*
These lines create an object literal containing the properties page, limit, skip, searchTerm, and search.
The req.context property is assigned this object, which allows other middleware or route handlers to access these values.
javascript
Copy code*/
next();
/*
This line calls the next() function to pass control to the next middleware in the chain. It's important to call next() to ensure that the request continues to be processed correctly.
Overall, this middleware function extracts the query parameters related to pagination and search from the request URL and creates a req.context object with standardized properties. This allows subsequent middleware or route handlers to access these values and perform actions accordingly.
  */