import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Recipe from './models/recipe.js';

import recipeRouter from './routes/recipeRoutes.js'

const app = express(); 
const port = 3000 

const mongodb = 'mongodb://localhost:27017/recipe_api'
mongoose.connect(mongodb).then(() => {
    console.log('MongoDB connected!')
})
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use('/recipes', recipeRouter)

// app.get('/', (req, res) => {
//     res.send('Welcome!')
// })

app.get('/test', (req, res) => {
    Recipe.find((err, recipes) => {
        console.log(recipes)
        res.json(recipes)
    })
})

// app.post('/recipes', (req, res) => {
//     const recipe = new Recipe({
//         name: req.body.name,
//         ingredients: req.body.ingredients
//     })

//     recipe.save((err) => {
//         res.json(recipe)
//     })
// })

// app.get('/recipes/:id', (req, res) => {
//     res.json(recipes[parseInt(req.params.id) -1 ])
// })

// app.put('/recipes/:id', (req, res) => {
//     Recipe.findByIdAndUpdate(req.params.id, req.body, (err) => {
//         res.json({ message: `updated recipe ${req.params.id}` })
//     })
// })

// app.delete('/recipes/:id', (req, res) => {
//     Recipe.findByIdAndDelete(req.params.id, (err) => {
//         res.json({ message: `deleted recipe ${req.params.id}` })
//     })
// })

// app.get('/about', (req, res) => {
//     res.send("What do you want to know?")
// })

app.listen(port,() => {
    console.log(`listening on port ${port}`,)
})


