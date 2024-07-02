import React from 'react'
import SearchInput from './SearchInput'
import Coversations from './Coversations'

const Sidebar = () => {
    return (
        <div>
            <SearchInput />
            <div className='divider px-3' />
            <Coversations />
            {/* <LogoutButton /> */}
        </div>
    )
}

export default Sidebar