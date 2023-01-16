import searchsvg from '../assets/search.svg'
import { useState } from 'react';

export default function Search() {
    
    const [searchText, setSearchText] = useState('');


    
    const handleChange = (e) => {
        setSearchText(e.target.value)
    };


    return (
        <>
            <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
                <input
                    className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                    type="search"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => handleChange(e)}
                />
                <img className="inline h-6 cursor-pointer" src={searchsvg} alt="Search" />
            </div>
            {/* <div className="items-center text-center"><button onClick={handleChange}>Click me here</button></div> */}
        </>
    );
}