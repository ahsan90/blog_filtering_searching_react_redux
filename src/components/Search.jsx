import searchsvg from '../assets/search.svg'
import { useState, useCallback, useEffect } from 'react';
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { reset_search, search_by_title } from "../redux/search/actions";

export default function Search() {
    
    const { isCleared } = useSelector(state => state.search)
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('');


    const debounceHandler = useCallback(debounce(((text) => {
        dispatch(search_by_title(text))
    }), 1000), [])

    const handleChange = (e) => {
        setSearchText(e.target.value)
        debounceHandler(e.target.value)
    };

    useEffect(() => {
        if (isCleared) {
            setSearchText('')
            dispatch(reset_search())
        }
    }, [isCleared])

    return (
        <>
            <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
                <input
                    className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                    type="search"
                    placeholder="Search Blog By Title"
                    value={searchText}
                    onChange={(e) => handleChange(e)}
                />
                <img className="inline h-6 cursor-pointer" src={searchsvg} alt="Search" />
            </div>
            {/* <div className="items-center text-center"><button onClick={handleChange}>Click me here</button></div> */}
        </>
    );
}