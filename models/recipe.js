import mongoose, { Schema } from 'mongoose';

const recipeSchema = new Schema({
    name: String,
    ingredients: [String],
});

const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;