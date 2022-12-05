import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const CourseSchema = new Schema({
    // courseId: ObjectId,
    code:String,
    // branch:String,
    // session:Number,
    // semester:Number,
    // createdAt:Date,
    // updatedAt:Date,
    // updatedBy:Number,
});

const CourseModel = mongoose.model('Course',CourseSchema);

export default CourseModel;