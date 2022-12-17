import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const CourseSchema = new Schema({
    // courseId: ObjectId,
    code:String,
    branch:String,
    session:String,
    semester:Number,
    createdAt:Date,
    subCode:String,
    subName:String,
    unitTopic:String,
    books:String,
    lecTopic:String,
    // updatedAt:Date,
   // updatedBy:Number,
});

const CourseModel = mongoose.model('Course',CourseSchema);

export default CourseModel;