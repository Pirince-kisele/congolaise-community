const express = require('express');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
//this code is for connecting our to mongoDb from Node
mongoose.connect('mongodb://localhost/my-database',{useNewUrlParser:true})

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) =>{
  res.render('pages/index');
})
app.get('/about', (req, res) =>{
  res.render('pages/about');
})
app.get('/contact', (req, res) =>{
  res.render('pages/contact');
})
app.get('/news', (req, res) =>{
  res.render('pages/news');
})
app.get('/question', (req, res) =>{
  res.render('pages/question');
})

app.get('/post', (req, res) =>{
  res.render('pages/post');
})
app.use((req, res)=>{
  res.status(404).render('pages/notFound')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});