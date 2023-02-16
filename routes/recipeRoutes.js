import {Router as router} from 'express'
import Recipe from "../models/recipe.js"

const recipeRouter = router();

recipeRouter.get('/', (req, res) => {
    Recipe.find((recipes) => {
        console.log(recipes)
        res.json(recipes)
    })
})

recipeRouter.post('/', (req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients
    })

    recipe.save(() => {
        res.json(recipe)
    })
})

recipeRouter.get('/:id', (req, res) => {
    res.json(recipes[parseInt(req.params.id) -1 ])
})

recipeRouter.put('/:id', (req, res) => {
    Recipe.findByIdAndUpdate(req.params.id, req.body, (err) => {
        res.json({ message: `updated recipe ${req.params.id}` })
    })
})

recipeRouter.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id, () => {
        res.json({ message: `deleted recipe ${req.params.id}` })
    })
})

export default recipeRouter