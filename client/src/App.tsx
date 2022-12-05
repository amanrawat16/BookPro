import React, { useEffect, useState } from 'react'
import './App.css'

// type TCourse = {
//   code:string;
//   _id:string;
// }

function App() {
  // const [courses,setCourses]= useState<TCourse[]>([]);
  const [code,setCode] = useState('');

  async function handleCreateCourse(e:React.FormEvent){
    e.preventDefault();
    await fetch('http://localhost:5000/course',{
      method:'POST',
      body:JSON.stringify({
        code,
      }),
      headers:{
        "Content-Type":"application/json",
      },
    });
    setCode("");
  }

  // useEffect(()=>{
  //   async function fetchCourses(){
  //    const response =  await fetch("http://localhost:5000/course");
  //    const newCourses = await response.json();
  //    setCourses(newCourses);
  //   }
  //   fetchCourses();
  // },[]);

  return (
    <div className="App">
    {/* <ul className="courses">
      {courses.map((course)=>(
        <li key={course._id}>{course.code}</li>
      ))}
    </ul> */}

      <form onSubmit={handleCreateCourse}>
        <label htmlFor="course-code">Course Code</label>
        <input 
         id="course-code"
         value={code}
         onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            setCode(e.target.value);
         }}
        />
        <button>Create Course</button>
      </form>
    </div>
  )
}

export default App
