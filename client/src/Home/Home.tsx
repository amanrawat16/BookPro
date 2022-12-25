import React, { FormEvent, useEffect, useState } from 'react'
import {useMultistepForm} from "../Home/useMultistepForm"
import App from '../App'
import { Courses } from './Courses'
import { Lectures } from './Lectures'
import { Subjects } from './Subjects'
import { Units } from './Units'

function Home(){

    type FormData ={
        code:string
        branch:string
        session:string
        semester:string
        subCode:string
        subName:string
        unitTopic:string
        books:string
        lecTopic:string
    }

    const INITIAL_DATA:FormData={
        code:"",
        branch:"",
        session:"",
        semester:"",
        subCode:"",
        subName:"",
        unitTopic:"",
        books:"",
        lecTopic:"",
    }
    type TCourse = {
    code:string;
    _id:string;
    branch:string
        session:string
        semester:string
        subCode:string
        subName:string
        unitTopic:string
        books:string
        lecTopic:string
    
}

    const[data,setData]=useState(INITIAL_DATA)
    const [courses,setCourses]= useState<TCourse[]>([]);

    function updateFields(fields:Partial<FormData>){
        setData(prev =>{
            return {...prev,...fields}
        } )
    }

    const {steps,step,currentStepIndex,isFirstStep,next,back,isLastStep} = useMultistepForm([
        <Courses {...data} updateFields={updateFields}/>,
        <Subjects {...data} updateFields={updateFields}/>,
        <Units {...data} updateFields={updateFields}/>,
        <Lectures {...data} updateFields={updateFields}/>,
    ])
    
    async function onSubmit(e: FormEvent){
        e.preventDefault()
        if(!isLastStep) return next()
        const res = await fetch('http://localhost:5000/course',{
        method:'POST',
        body:JSON.stringify({
        data
      }),
      headers:{
        "Content-Type":"application/json",
      },
    });
    const course = await res.json()
    setCourses([...courses,course])

    }

    async function handleDeleteCourse(courseId: string){
        await fetch(`http://localhost:5000/course/${courseId}`,{
            method:'DELETE',  
        });
        setCourses(courses.filter((courses)=>courses._id !== courseId));
    }

    useEffect(()=>{
        async function fetchCourses(){
        const response =  await fetch("http://localhost:5000/course");
        const newCourses = await response.json();
        setCourses(newCourses);
        }
        fetchCourses();
    },[]);
    return(
        <div>
        <div 
        style={{
            position: "relative",
            background:"white",
            border:"1px solid black",
            padding: "2rem",
            margin: " auto",
            marginTop:"2rem",
            borderRadius:".5rem",
            fontFamily:"Arial",
            maxWidth:"max-content",
        }}
        >
            <form onSubmit={onSubmit}>
                <div style={{
                    position:"absolute",
                    top:".5rem",
                    right:".5rem"
                }}>
                    {currentStepIndex +1}/{steps.length}
                </div>
                {step}

                <div style={{
                    marginTop:"1rem",display:"flex",gap:".5rem",justifyContent:"flex-end"
                }}>
                    {!isFirstStep && <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={back}>Back</button>}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">{isLastStep ? "Finish":"Next"}</button>
                </div>
            </form>
        </div>
        <div className="courses">
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 mx-10 my-10 ">
      {courses.map((course)=>(
        
        <ul className='font-bold mb-1 md:mb-0 pr-4 px-4 py-4 flow-root w-80 text-left md:text-center rounded-lg border hover:bg-blue-700  bg-blue-600 text-white  mx-10 my-2 '>        
            <li  key={course._id}>CODE: {course.code} </li>
            <li  key={course._id}>BRANCH: {course.branch}</li>
            <li  key={course._id}>SEMESTER: {course.semester}</li>
            <li  key={course._id}>SESSION: {course.session}</li>
            <li  key={course._id}>SUBJECT CODE: {course.subCode}</li>
            <li  key={course._id}>SUBJECT NAME: {course.subName}</li>
            <li  key={course._id}>UNITS :{course.unitTopic}</li>
            <li  key={course._id}>LECTURES :{course.lecTopic}</li>
            <li  key={course._id}>BOOKS :{course.books}</li>
            <button className="my-2 text rounded px-4 bg-red-700 hover:bg-red-900"onClick={()=>handleDeleteCourse(course._id)}>DELETE</button>
        </ul>
        ))}
    </ul>
    </div>
 

        </div>
    )
}
    

export default Home