import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '@/store';
import { useRouter } from 'next/router';

const Navigation = () => {

  const router = useRouter();
  const auth = useSelector((state) => state.authReducer.isLogged);
  const isAdmin = useSelector((state) => state.userReducer.isAdmin)
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
    router.replace('/signin');
  }

  console.log('user');
  console.log(isAdmin);

  const [signupBut, setSignupBut] = useState(true);
  console.log("navigation");
  // console.log(signupBut);

  const clickHandler = () => {
    setSignupBut(!signupBut);
  }

  return (
    <div className='flex justify-between bg-teal-700 items-center'>
        <div>
            <Link href='/'><h1 className='text-white text-4xl m-4'>IGAS</h1></Link>
        </div>
        <div className='flex justify-between px-10'>
            {auth && !isAdmin && <Link href='/bookings'><button className='mx-10 text-white text-xl'>Booking</button></Link>}
            {auth && isAdmin && <Link href='/dashboard'><button className='mx-10 text-white text-xl'>Dashboard</button></Link>}
            {auth && <button className='text-white text-xl' onClick={logoutHandler}>Logout</button>}
            {!auth && signupBut && <Link href='/signup'><button className='text-white text-xl' onClick={clickHandler}>Signup</button></Link>}
            {!auth && !signupBut && <Link href='/signin'><button className='text-white text-xl' onClick={clickHandler}>Signin</button></Link>}
        </div>
    </div>
  )
}

export default Navigation