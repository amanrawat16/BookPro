import { FormWrapper } from "./FormWapper";
type subData = {
    subCode : string,
    subName:string,
}
type SubjectFromProps = subData &{
    
    updateFields:(field:Partial<subData>)=>void
}

export function Subjects({subCode,
subName,updateFields}:SubjectFromProps){

    return (
        <FormWrapper title="Subjects">
        <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">Subject Code</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoFocus required type="text" value={subCode} onChange={e => 
        updateFields({subCode:e.target.value})}/>
        <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">Subject Name</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" value={subName} onChange={e => 
        updateFields({subName:e.target.value})}/>
        </FormWrapper>
    )
}