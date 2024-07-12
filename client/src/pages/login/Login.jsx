import React, { useState } from 'react'
import GlassWrapper from '../../components/GlassWrapper'
import useLogin from '../../hooks/useLogin';
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, loading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
    }

    return (<GlassWrapper>
        <div className='border-b-2 py-2'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login
                <span className='text-blue-500 ml-2'>ChatApp</span>
            </h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='my-2'>
                <label className='label p-2 text-base label-text'>
                    Email :
                </label>
                <input type="email"
                    placeholder='Enter Email'
                    className='w-full input input-bordered h-10'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label className='label p-2 text-base label-text'>
                    Password :
                </label>
                <input type="password"
                    placeholder='Enter password'
                    className='w-full input input-bordered h-10'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <Link to="/signup" className='text-sm m-1 hover:text-blue-50 inline-block'>
                {"Don't"} have an account?
            </Link>
            <div><button
                className='btn btn-success btn-block'
                disabled={loading}
            >
                {loading ?
                    <span className='loading loading-spinner'></span> : "Login"
                }
            </button>
            </div>
        </form>
    </GlassWrapper>
    )
}

export default Login