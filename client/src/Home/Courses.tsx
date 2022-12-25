import { FormWrapper } from "./FormWapper"

type CourseData={
        code:string,
        branch:string,
        session:string,
        semester:string,
}

type CourseFormProps = CourseData &{
    
        updateFields:(fields: Partial<CourseData>)=>void
}

export function Courses({code,branch,session,semester,updateFields}:CourseFormProps){

    return(
        <FormWrapper title="Courses">
        <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">Program Code</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" autoFocus required  value={code} onChange={e => 
        updateFields({code:e.target.value})}/>
        <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">Branch</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={branch} onChange={e => 
        updateFields({branch:e.target.value})}/>
        <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4" >Session</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" value={session} onChange={e => 
        updateFields({session:e.target.value})}/>
        <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">Semester</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required min={1} type="number" value={semester} onChange={e => 
        updateFields({semester:e.target.value})}/>
        </FormWrapper>
    )
}