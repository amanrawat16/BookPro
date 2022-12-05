import express,{Request,Response} from "express";
import mongoose from "mongoose";

import Course from "../models/Course";

const router = express.Router();

router.get('/',async (req:Request,res:Response)=>{
    const courses = await Course.find();
    res.json(courses);
});

router.post('/',async (req:Request,res:Response)=>{
    console.log(req.body);
    const newCourse = new Course({
        code: req.body.code,
    });
    const createdCourse = await newCourse.save();
    res.json(createdCourse);
});

module.exports = router;