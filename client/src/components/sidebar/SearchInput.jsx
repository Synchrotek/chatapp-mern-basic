import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text"
                className='input input-bordered rounded-xl'
            />
            <button type='submit'
                className='btn btn-square bg-transparent text-2xl'
            ><FaSearch /></button>
        </form>
    )
}

export default SearchInput