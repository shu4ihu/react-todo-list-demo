import { FC } from "react";

const SearchBar: FC = () => {
    return (
        <div className='search py-10'>
            <div className='w-60 h-8 flex items-center b-1 rounded-4'>
                <i className='i-carbon-search text-coolGray mx-2 text-lg'></i>
                <input className='outline-none' type="text" placeholder='Search'/>
            </div>
        </div>
    )
}


export default SearchBar