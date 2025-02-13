const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

app.use('/', userRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
