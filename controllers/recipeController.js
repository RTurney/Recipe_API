import Recipe from "../models/recipe.js";

export const recipeList = async (req, res) => {
   const recipes = await Recipe.find()
   res.json({recipes: recipes})
}

export const findRecipeById = async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    res.json(recipe)    
}

export const postNewRecipe = async (req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients,
        imageURL: req.body.imageURL,
        instructions: req.body.instructions,
    })

    recipe.save(() => {
        res.json(recipe)
    })
}

export const updateRecipe = async (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, (err) => {
        res.json({ message: `updated recipe ${req.params.id}` })
    }) 
}

export const deleteRecipe= async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if(recipe == null) {
        res.json('No recipe found')
    } else {
        Recipe.findByIdAndDelete(req.params.id, () => {
            res.json({ message: `deleted recipe ${req.params.id}` })
        })
    }
}