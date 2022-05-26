const express = require('express');
const app = express();

app.set("view engine" , "jsx");

app.engine("jsx", require("express-react-views").createEngine());

const pokeData = require('./models/pokemon')
app.get('', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});
app.get('/pokemon', (req, res) =>{
    res.render('index', {pokemon: pokeData})
});
app.get('/pokemon/:character', (req, res) => {
    res.render("Show", {pokemon: pokeData[req.params.character]});
});

app.listen(3000, () =>{
    console.log('listening');

})