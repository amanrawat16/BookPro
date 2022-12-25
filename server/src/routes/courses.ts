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
        code: req.body.data.code,
        branch: req.body.data.branch,
        session:req.body.data.session,
        semester:req.body.data.semester,
        createdAt:Date.now(),
        subCode:req.body.data.subCode,
        subName:req.body.data.subName,
        unitTopic:req.body.data.unitTopic,
        books:req.body.data.books,
        lecTopic:req.body.data.lecTopic,
        // updatedAt:req.body.updatedAt,
        //updatedBy
    });
    const createdCourse = await newCourse.save();
    res.json(createdCourse);
});

router.delete('/:courseId',async (req:Request,res:Response)=>{
    const courseId = req.params.courseId;

    await Course.findByIdAndDelete(courseId);

    res.json({
        message:"successfully deleted entry",
    });
});

module.exports = router;