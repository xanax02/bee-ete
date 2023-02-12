
import React, { useState, useRef } from 'react'

const Signup = () => {

    const[isAdmin, setIsAdmin] = useState(true);
    const userName = useRef();
    const password = useRef();

    const submitHandler = async (event) => {
        event.preventDefault();
        const details = {
            email: userName.current.value,
            password: password.current.value,
            isAdmin
        }

        const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);

    }

    let buttonData ;
    if(isAdmin)
    {
        buttonData = 'User'
    }
    else
    {
        buttonData = 'Admin'
    }

    return (
        <div className='w-[600px] outline mx-auto my-24 bg-white text-gray-700 rounded-md'>
            <h2 className='text-center text-4xl'>Sign in</h2>
            <p className='text-center'>(user)</p>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    email
                    </label>
                    <input ref={userName} class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                    </label>
                    <input ref={password} class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        SginUp
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Login as {buttonData}
                    </a>
                </div>
            </form>
        </div>
      )
}

export default Signup