const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 65003;

// Middleware:

// If on FLIP, use cors() middleware to allow cross-origin requests from the frontend with your port number:
// EX (local): http://localhost:5173 
// EX (FLIP/classwork) http://flip3.engr.oregonstate.edu:5173
app.use(cors({ credentials: true, origin: "*" }));
app.use(express.json());

// API Routes for backend CRUD:
// app.use("/api/people", require("./routes/peopleRoutes"));


// Add your Connect DB Activitiy Code Below:
// ...
const db = require('./database/config.js')

//Get one class
app.get('/classes/:_id',  (req, res) => {
    const class_id = req.params._id
    let query_class = `SELECT class_id, name, duration, capacity, description FROM Classes WHERE class_id = ${class_id};`
    db.pool.query(query_class, (err, result)=>{
      if (err) throw err;
      res.json(result)
    });
});

//Get all classes
app.get('/classes',  (req, res) => {
    let query_classes = 'SELECT * FROM Classes;'
    db.pool.query(query_classes, (err, result)=>{
      if (err) throw err;
      res.json(result)
    });
});


app.post('/classes',  (req, res) => {
    //CREATE A CLASS
    const { name, duration, capacity, description } = req.body;
    if (!name || !duration || !capacity || !description) {
        return res.status(400);
    }
    let query_create_class = `INSERT INTO Classes (name, duration, capacity, description) VALUES ('${name}', '${duration}', '${capacity}', '${description}');`
    db.pool.query(query_create_class, [name, duration, capacity, description], (err, result) => {
        if (err) throw err;
        res.json(result)
    });
});

app.put('/classes/:_id',  (req, res) => {
    //UPDATE A CLASS
    const class_id = parseInt(req.params._id);
    const { name, duration, capacity, description } = req.body;

    let query_update_class = `UPDATE Classes SET 
        name='${name}',
        duration = '${duration}',
        capacity='${capacity}',
        description = '${description}'   
        WHERE class_id= ${class_id};`
    db.pool.query(query_update_class,[name],(err,result)=>{
        if(err) throw err;
        res.json(result)
    })
});


app.delete('/classes/:_id',  (req, res) => {
    //DELETE A CLASS
    const class_id = req.params._id;
    let query_delete_class = `DELETE FROM Classes WHERE class_id = ${class_id};`
    db.pool.query(query_delete_class, (err, result) => {
        if (err) throw err;
        res.json(result)
    });
});

// ...
// End Connect DB Activity Code.


app.listen(PORT, () => {
  // Change this text to whatever FLIP server you're on
  console.log(`Server running:  http://classwork.engr.oregonstate.edu:${PORT}...`);
});
