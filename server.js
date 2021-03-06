const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const Apartment = require('./models/Apartment');

app.post('/', (req, res) => {
    res.send(req.body);
})

app.get('/Home', (req, res) => {
    Apartment.find({})
        .then(apartments => res.json(apartments));
});

app.get('/Apartment/:id', (req, res) => {
    let ObjID = new mongoose.Types.ObjectId(req.params.id);
    Apartment.findOne({ _id: ObjID})
        .then(apartment => res.json(apartment));
});

if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {console.log(`Listening on PORT ${PORT}`)});