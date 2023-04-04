# Recipe API

This application is a simple api built to improve and demonstrate my understanding of application programming interfaces by building my own.
At it's curent iteration this api only runs locally and thus only can only save/return recipes locally on the device running the server.

## Installation

To install this project locally, run:

```
git clone git@github.com:RTurney/Recipe_API.git
```

Once downloaded, run

```
npm install
```

This will download all the necessary packages for the project.

## Starting the server

To run this application run the following command within the project:

```
npm start
```

After running this line, you should see a message within the terminal stating `listening on port 3000`

If you go the https://localhost:3000/recipes you will be presented with the results of a GET request to the database.
If this is the first time running this application on your device, you will likely not have any recipes returned.
The best way to currently use and test this project is to use the Postman application.

## Api current status

- The api can run a local server and start an instance of mongoDB
- http://localhost:3000/recipes/ performs a get request listing all recipes currently within the mongoDB server
- performing a POST request to /recipes creates a new recipe object within the database
- http://localhost:3000/recipes/[recipe id] will return only a specified recipe
- running a PUT request at http://localhost:3000/recipes/[recipe id] will update the specified recipe with the new variables
- running a DELETE request at http://localhost:3000/recipes/[recipe id] will delete the specified recipe from the database


## Recipe model

This is the current schema for the recipe model:

```
{
    name: String,
    ingredients: [String],
    imageURL: [String],
    instructions: [String]
}
```

/recipes returns an array of recipe objects:

```
{
    recipes: [
        {recipe},
        {recipe},
        {recipe}
    ]
}
```

### Future plans

- I would like to deploy this application on Heroku or other server so it can be accessed at any time with a singular database containing all recipes uploaded
- I would like to add user authentication + user profiles to this api, so only registered users can upload recipes and users can only update/delete their own uploaded recipes
- I need to add testing to this api
- I would like to add better documentation to this application such as swagger
