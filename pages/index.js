import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Login from '@/components/Login'
import Navigation from '@/components/Navigation'
import { useState, useEffect } from 'react'; 
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  const auth = useSelector((state) => state.authReducer.isLogged);

  useEffect(() => {
    if(!auth)
    {
      router.replace('/signin')
    }
  },[])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {/* <h1>Hello NextJs</h1> */}
      <h1 className='text-gray-700 text-8xl text-center my-14'>Welcome</h1>
    </>
  )
}
