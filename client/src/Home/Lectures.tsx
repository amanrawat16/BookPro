import { FormWrapper } from "./FormWapper";

type lecData ={
    lecTopic : string,
}

type lecFormProps= lecData & {
    
    updateFields:(fields:Partial<lecData>)=>void
}

export function Lectures({lecTopic,updateFields}:lecFormProps){
    return(
        <FormWrapper title="Lectures">
        <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">Lecture Topic</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" autoFocus required type="text" value={lecTopic} onChange={e => 
        updateFields({lecTopic:e.target.value})} />
        </FormWrapper>
    )
}