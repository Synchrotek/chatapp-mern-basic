import React from 'react'
import GlassWrapper from '../../components/GlassWrapper'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
    return (<GlassWrapper>
        <div className='flex'>
            <Sidebar />
            <MessageContainer />
        </div>
    </GlassWrapper>
    )
}

export default Home