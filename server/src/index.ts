import {config} from 'dotenv';
config();

import express,{Request,Response} from "express";
import mongoose from 'mongoose';
import cors from 'cors';

const courseRoutes = require('./routes/courses');
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/course',courseRoutes);


mongoose.connect(process.env.MONGO_URL!)
.then(()=>{
    console.log(`Connected to DB on port ${PORT}`);
    app.listen(PORT);
});

module.exports = app;
