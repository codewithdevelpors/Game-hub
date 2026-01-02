const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gamehub')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
const gamesRouter = require('./routes/games');
const authRouter = require('./routes/auth');
app.use('/api/games', gamesRouter);
app.use('/api/auth', authRouter);

// Static file serving for downloads
app.use('/downloads', express.static('downloads'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});