const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
require('dotenv').config({ path: '.env' });
const Pool = require('pg').Pool

const pool = new Pool({	
  host: process.env.DATABASE_PW ,
  database: 'article',
  password: process.env.DATABASE_PW ,
  port: 5432,
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// body parse middleware application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
        pool.query('SELECT * FROM articles ORDER BY Date ASC', (error, results) => {
          if (error) {
            throw error
          }
          res.render("home", {
            title: "Home" ,
            posts: results.rows    
          });
    

        })

app.get("/article/:id", (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM articles WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.render("article"), {
            title: "News" ,
            posts: results.rows   
        }
      })

})    
   

})
app.listen('3080', () => {
    console.log('Server Started on port');
});
