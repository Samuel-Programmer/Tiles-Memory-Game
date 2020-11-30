

const express = require("express");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));



app.get('/', (req, res) => res.render('main', {pageName: 'rules'}));
app.get('/main', (req, res) => res.render('main', {pageName: 'rules'}));
app.get('/contact', (req, res) => res.render('contact', {pageName: 'contact'}));
app.get('/game', (req, res) => res.render('game', {pageName: 'game'}));



app.listen(3000, () => console.log("Server started on port 3000"));
