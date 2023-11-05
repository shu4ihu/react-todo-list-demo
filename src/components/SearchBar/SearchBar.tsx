import { FC } from "react";
import type { SearchBarProps } from "@SearchBar/modules/modules";

const SearchBar: FC<SearchBarProps> = ({onSearch}:SearchBarProps) => {

    const handleInputChange = (inputValue:string):void => {
        onSearch(inputValue.trim())
    }

    return (
        <div className='search md:py-10 py-5 md:pl-0 pl-8vw'>
            <div className='w-60 h-8 flex items-center b-1 rounded-4'>
                <i className='i-carbon-search text-coolGray mx-2 text-lg'></i>
                <input className='outline-none' type="text" placeholder='Search' onChange={(e)=>{handleInputChange(e.target.value)}}/>
            </div>
        </div>
    )
}


export default SearchBar