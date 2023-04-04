import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Recipe from './models/recipe.js';

import recipeRouter from './routes/recipeRoutes.js'

const app = express(); 
const port = 3000 

const mongodb = 'mongodb://localhost:27017/recipe_api'
mongoose.set('strictQuery', false);
mongoose.connect(mongodb).then(() => {
    console.log('MongoDB connected!')
})
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use('/recipes', recipeRouter)

// test route
app.get('/test', (req, res) => {
    res.send("Test response... How did you get here?")
})

app.listen(port,() => {
    console.log(`listening on port ${port}`,)
})
