import {Router as router} from 'express'
import Recipe from "../models/recipe.js"

const recipeRouter = router();

recipeRouter.get('/', async (req, res) => {
   const recipes = await Recipe.find()
   res.json({recipes: recipes})
})

recipeRouter.post('/', (req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients,
        imageURL: req.body.imageURL,
        instructions: req.body.instructions,
    })

    recipe.save(() => {
        res.json(recipe)
    })
})

recipeRouter.get('/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    res.json(recipe)
})

recipeRouter.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, (err) => {
        res.json({ message: `updated recipe ${req.params.id}` })
    })
})

recipeRouter.delete('/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id)
    if(recipe == null) {
        res.json('No recipe found')
    } else {
        Recipe.findByIdAndDelete(req.params.id, () => {
            res.json({ message: `deleted recipe ${req.params.id}` })
        })
    }
})

export default recipeRouter