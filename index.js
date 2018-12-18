var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var userRoutes = require('./routes/user-routes');

var app = express();

// server port
const port = 3000;

//connection to mongoDb
mongoose.connect('mongodb://localhost:27017/DemoDatabase', { useNewUrlParser: true });
mongoose.connection.on('connected', (err, client)=> {
    if (err) return console.log(err)
    console.log('Mongo Db Connection established successfully');
});
mongoose.connection.on('error', ()=> {
    console.log('Mongo Db Connection failed');
});


// cors
app.use(cors());
// Json parser
app.use(bodyparser.json());
// routes for user service's
app.use('/api/users', userRoutes);

app.get('/', (req, res)=> {
    res.send('Express programming connected');
});

app.listen(port, () => {
    console.log('server started successfully');
});