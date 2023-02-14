import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '@/store';
import { useRouter } from 'next/router';

const Navigation = () => {

  const router = useRouter();
  const auth = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    router.replace('/signin');
  }

  return (
    <div className='flex justify-between bg-teal-700'>
        <div>
            <h1>Name of Company</h1>
        </div>
        <div className='flex justify-between px-10'>
            {auth && <h1 className='mx-10'>Booking</h1>}
            {auth && <button onClick={logoutHandler}>Logout</button>}
            {!auth && <button>Signup</button>}
        </div>
    </div>
  )
}

export default Navigation