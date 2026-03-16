import React, { useState } from 'react'


const Form = ({ Height, Weight, setHeight, setWeight }) => {

    const [bmi, setBmi] = useState(null);
    const calculateBmi = () => {
        if (Height && Height) {
            const result = (Weight / ((Height / 100) ** 2)).toFixed(2);
            setBmi(result);
        }
        setWeight("");
        setHeight("");
    }

    const submitHandler = (e) => {
        e.preventDefault();
        calculateBmi(e);


    }
    return (
        <div>
            <div className='bg-white h-70 w-70 pt-10 flex justify-center rounded border border-blue-400'>
                <form className='' onSubmit={(e) => {
                    submitHandler(e);
                }}>
                    <input type="text"
                        value={Weight}
                        onChange={(e) => {
                            setWeight(e.target.value)
                        }}
                        placeholder='Enter Your Weight'
                        className='border m-2 p-2'
                    />
                    <br />
                    <input type="text"
                        value={Height}
                        onChange={(e) => {
                            setHeight(e.target.value)
                        }}
                        placeholder='Enter Your Height'
                        className='border m-2 p-2'
                    />
                    <br />
                    <button className='bg-black text-white  px-5 py-2 rounded ml-13 mt-6' >Calculate</button>
                </form>

            </div>
            <div>
                <div className='bg-black rounded h-20 mt-4 text-white'>
                    <div className=' flex flex-col justify-center items-center'>
                        <h2 >
                            Your BMI
                        </h2>
                        <p> 
                            {bmi}
                        </p>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Form