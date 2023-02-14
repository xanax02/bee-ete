import Link from 'next/link';
import { useState } from 'react';
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

  const [signupBut, setSignupBut] = useState(true);
  console.log("navigation");
  // console.log(signupBut);

  const clickHandler = () => {
    setSignupBut(!signupBut);
  }

  return (
    <div className='flex justify-between bg-teal-700'>
        <div>
            <h1>Name of Company</h1>
        </div>
        <div className='flex justify-between px-10'>
            {auth && <h1 className='mx-10'>Booking</h1>}
            {auth && <button onClick={logoutHandler}>Logout</button>}
            {!auth && signupBut && <Link href='/signup'><button onClick={clickHandler}>Signup</button></Link>}
            {!auth && !signupBut && <Link href='/signin'><button onClick={clickHandler}>Signin</button></Link>}
        </div>
    </div>
  )
}

export default Navigation