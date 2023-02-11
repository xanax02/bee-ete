import React, {useRef} from 'react'
import Navigation from './Navigation'

const BookingPage = (props) => {

    const firstname = useRef();
    const lastname = useRef();
    const Hno = useRef();
    const Soc = useRef();
    const City = useRef();
    const pincode = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const details = {
            fname: firstname.current.value,
            lname: lastname.current.value,
            hno: Hno.current.value,
            soc: Soc.current.value,
            city: City.current.value,
            pin: pincode.current.value,
        }

        console.log(details);
        props.submitBooking(details);
    }

  return (
    <>
    <Navigation />
    <div className='bg-white mx-auto w-[800px] p-20 mt-10'>
        <form className="w-full" onSubmit={submitHandler}>
        <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input ref={firstname} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Abhay" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input ref={lastname} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Thakur" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                    Flat No.
                    </label>
                    <input ref={Hno} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="705/2" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    Society
                    </label>
                    <input ref={Soc} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Housefed" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                    City
                    </label>
                    <input ref={City} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Banur" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                    Zip
                    </label>
                    <input ref={pincode} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
                </div>
            </div>
            <div className='mt-8'>
                <button className='bg-blue-500 text-white rounded-md text-center mx-auto px-6 py-2 ml-72'>Book Gas</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default BookingPage