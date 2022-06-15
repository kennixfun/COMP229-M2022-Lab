import mongoose, { mongo } from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

const MovieSchema = new Schema // design a table in database
({
    Name: String,
    Year: String,
    Director: String,
    Rating: String
},
{
    collection: "movies"
})

const Model = mongoose.model("Movies", MovieSchema);