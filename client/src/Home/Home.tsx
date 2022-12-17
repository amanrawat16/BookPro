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
        lecturesTopic:string
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
        lecturesTopic:"",
    }

    const[data,setData]=useState(INITIAL_DATA)

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
        await fetch('http://localhost:5000/course',{
        method:'POST',
        body:JSON.stringify({
        data
      }),
      headers:{
        "Content-Type":"application/json",
      },
    });
    }

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
    
        
 

        </div>
    )
}
    

export default Home