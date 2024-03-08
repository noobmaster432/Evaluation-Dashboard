require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const connectDB = require('./db/connect.js');
connectDB();

const rootRouter = require('./routes/index.js');

const cors = require('cors');

app.use(cors({
    origin: "*",
}));

app.use(express.json());

app.use('/api/v1', rootRouter);

app.get('/', (req, res) => {
    res.send('Server is Live');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});