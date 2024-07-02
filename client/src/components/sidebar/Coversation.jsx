import React from 'react'

const Coversation = () => {
    return (<>
        <div className='flex gap-2 items-center hover:bg-orange-500 bg-opacity-10 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://i.pinimg.com/564x/7f/21/c9/7f21c92a6baf5e0ff9c87b3baba8e78f.jpg" alt="user avatar" />
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>Jhon Doe</p>
                    <span className='text-xl'>🚀</span>
                </div>
            </div>
        </div>
        <div className='divider my-0 py-0 h-1' />
    </>
    )
}

export default Coversation