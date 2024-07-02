import React from 'react'
import GlassWrapper from '../../components/GlassWrapper'

const Login = () => {
    return (<GlassWrapper>
        <div className='border-b-2 py-2'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500 ml-2'>ChatApp</span>
            </h1>
        </div>
        <form>
            <div className='my-2'>
                <label className='label p-2 text-base label-text'>
                    Email :
                </label>
                <input type="email"
                    placeholder='Enter Email'
                    className='w-full input input-bordered h-10'
                />
                <label className='label p-2 text-base label-text'>
                    Password :
                </label>
                <input type="password"
                    placeholder='Enter password'
                    className='w-full input input-bordered h-10'
                />
            </div>
            <a href="#" className='text-sm m-1 hover:text-blue-50 inline-block'>
                {"Don't"} have an account?
            </a>
            <div><button
                className='btn btn-success btn-block'
            >Login</button>
            </div>
        </form>
    </GlassWrapper>
    )
}

export default Login