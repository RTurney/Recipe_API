import {Router as router} from 'express'

import {
    recipeList, 
    findRecipeById, 
    postNewRecipe, 
    updateRecipe, 
    deleteRecipe
} from "../controllers/recipeController.js"

const recipeRouter = router();

recipeRouter.get('/', recipeList);

recipeRouter.post('/', postNewRecipe)

recipeRouter.get('/:id', findRecipeById)

recipeRouter.put('/:id', updateRecipe)

recipeRouter.delete('/:id', deleteRecipe)

export default recipeRouter