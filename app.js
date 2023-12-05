const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();




// view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



// body parse middleware application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));



// parse application/json
app.use(bodyParser.json());



//set public folder
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    res.render("home", {
       title: "Home"  
     });
   });

app.listen('80', () => {
    console.log('Server Started on port');
});