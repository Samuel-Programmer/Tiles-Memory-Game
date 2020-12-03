

const express = require("express");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));



app.get('/', (req, res) => res.render('main', {pageName: 'rules'}));
app.get('/main', (req, res) => res.render('main', {pageName: 'rules'}));
app.get('/contact', (req, res) => res.render('contact', {pageName: 'contact'}));
app.get('/game', (req, res) => res.render('game', {pageName: 'game'}));



let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => console.log("Server was started successfully0"));
