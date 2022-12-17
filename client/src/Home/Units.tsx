import { FormWrapper } from "./FormWapper";

type unitData = {
    unitTopic:string,
    books:string,
}

type UnitFormProps= unitData &{
    
    updateFields:(fields:Partial<unitData>)=> void
}

export function Units({unitTopic,
books,updateFields}:UnitFormProps){

    return (
        <FormWrapper title="Units">
        <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">Unit Topic</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required autoFocus type="text" value={unitTopic} onChange={e => 
        updateFields({unitTopic:e.target.value})}/>
        <label className="block text-gray-700 font-bold md:text-right mb-1 md:mb-0 pr-4">Books</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required type="text" value={books} onChange={e => 
        updateFields({books:e.target.value})}/>
        </FormWrapper>
    )
}