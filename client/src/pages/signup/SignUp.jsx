import React, { useState } from 'react'
import GlassWrapper from '../../components/GlassWrapper'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullname: '',
        email: '',
        password: '',
        ConfirmPassword: '',
        gender: ''
    });

    const { loading, signup } = useSignup();

    const handleGenderCheckbox = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSignuSubmit = async (e) => {
        e.preventDefault();
        console.log("inputs: ", inputs);
        await signup(inputs);
    };

    return (<GlassWrapper>
        <div className='border-b-2 py-2'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Signup
                <span className='text-blue-500 ml-2'>ChatApp</span>
            </h1>
        </div>
        <form onSubmit={handleSignuSubmit}>
            <div className='my-2'>
                <label className='label p-2 text-base label-text'>
                    Full name :
                </label>
                <input type="text"
                    placeholder='Enter Full name'
                    className='w-full input input-bordered h-10'
                    value={inputs.fullname}
                    onChange={e => setInputs({ ...inputs, fullname: e.target.value })}
                />
                <label className='label p-2 text-base label-text'>
                    Email :
                </label>
                <input type="email"
                    placeholder='Enter Email'
                    className='w-full input input-bordered h-10'
                    value={inputs.email}
                    onChange={e => setInputs({ ...inputs, email: e.target.value })}
                />
                <label className='label p-2 text-base label-text'>
                    Password :
                </label>
                <input type="password"
                    placeholder='Enter password'
                    className='w-full input input-bordered h-10'
                    value={inputs.password}
                    onChange={e => setInputs({ ...inputs, password: e.target.value })}
                />
                <label className='label p-2 text-base label-text'>
                    Confirm Password :
                </label>
                <input type="password"
                    placeholder='Retype your password'
                    className='w-full input input-bordered h-10'
                    value={inputs.ConfirmPassword}
                    onChange={e => setInputs({ ...inputs, ConfirmPassword: e.target.value })}
                />
            </div>

            <GenderCheckbox
                handleGenderCheckbox={handleGenderCheckbox}
                selectedGender={inputs.gender}
            />

            <Link to="/login" className='text-sm m-1 hover:text-blue-50 inline-block'>
                {"Don't"} have an account?
            </Link>
            <div><button
                className='btn btn-success btn-block'
            >Signup</button>
            </div>
        </form>
    </GlassWrapper>
    )
}

export default SignUp