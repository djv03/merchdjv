import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoute from './routes/authRoute.js'
import cors from 'cors';
//dotenv config
dotenv.config();

// app constants
const port = process.env.PORT || 8080;
const mode = process.env.MODE;

const app = express();

//databse connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1/auth', authRoute);

// routes
app.get('/', (req, res) => {
    res.send("<h1>welcome bro</h1>");
    // res.send({sjdns:"welcome bro"});
})

app.listen(port, () => {
    console.log(`express server is running on port ${port} in ${mode} mode`.bgGreen);
})