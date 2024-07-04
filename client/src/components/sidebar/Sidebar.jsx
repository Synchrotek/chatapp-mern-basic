import React from 'react'
import SearchInput from './SearchInput'
import Coversations from './Coversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
    return (
        <div className='border-r pr-3 flex flex-col'>
            <SearchInput />
            <div className='divider px-3' />
            <Coversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar