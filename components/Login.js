import { useRouter } from 'next/router';
import { useState, useRef } from 'react'

const Login = () => {

    const[isAdmin, setIsAdmin] = useState(false);
    const userName = useRef();
    const password = useRef();

    const router = useRouter();

    const submitHandler = async (event) => {
        event.preventDefault();
        const details = {
            email: userName.current.value,
            password: password.current.value,
            isAdmin
        }

        const response = await fetch('/api/login    ', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        // if(data)
        // {
        //     router.replace("/");
        // }

        console.log(details);
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

    const adminHandler=() => {
        setIsAdmin((prevState) => {
            return !prevState
        })
    }

  return (
    <div className=' w-[500px] outline mx-auto my-24 bg-white text-gray-700 rounded-md'>
        <h2 className='text-center text-4xl'>Sign in</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
                </label>
                <input ref={userName} className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
                </label>
                <input ref={password} className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Login
                </button>
                <a className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={adminHandler}>
                    Login as {buttonData}
                </a>
            </div>
        </form>
    </div>
  )
}

export default Login