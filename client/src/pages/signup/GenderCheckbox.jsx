import React from 'react'

const GenderCheckbox = ({ handleGenderCheckbox, selectedGender }) => {
    return (
        <div className='flex gap-2'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Male</span>
                    <input type="checkbox"
                        className='checkbox border-pink-500'
                        checked={selectedGender === 'male'}
                        onChange={() => handleGenderCheckbox("male")}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='label-text'>Female</span>
                    <input type="checkbox"
                        className='checkbox checkbox-secondary border-pink-500'
                        checked={selectedGender === 'female'}
                        onChange={() => handleGenderCheckbox("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox