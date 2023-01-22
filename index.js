
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const router = require('./routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    autoIndex: true
})

if(mongoose){
    console.log('DB connected')
} else {
    console.log('No DB connected')
}


const port = process.env.PORT;
app.listen(port || 3300, () => {
    console.log(`App listening on ${port}`)
});

app.use('/', router);

app.use((req, res) => res.render('notFound'))