import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navigation from "@/components/Navigation";

const dashboard = () => {

    const router = useRouter();
    const [isAdmin, setIsAdmin] = useState(true);
    const [bookings, setBookings] = useState([]);

    const callHandler = async() => {
        const response = await fetch('/api/booking');
        const data = await response.json();
        // console.log(data);
        // console.log(data.data);
        const newBookings = [];
        for(const key in data.data)
        {
            const book = {
                fname: data.data[key].fname,
                lname: data.data[key].lname,
                hno: data.data[key].hno,
                city: data.data[key].city,
                soc: data.data[key].soc,
                pin: data.data[key].pin
            }
            newBookings.push(book);
            console.log(book);
        }
        // console.log(newBookings);
        setBookings(newBookings);
    }

    useEffect(() => {
        if(!isAdmin)
        {
            router.replace("/");
        }
        else
        {
            callHandler();
        }
    },[])

  return (
    <>
        <Navigation />
        <div className="relative overflow-x-auto mt-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            HNo.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Society
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Pincode
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                    </tr>
                </thead>
                    {bookings.map(booking => {
                        return (
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {booking.fname} {booking.lname}
                                    </th>
                                    <td className="px-6 py-4">
                                        {booking.hno}
                                    </td>
                                    <td className="px-6 py-4">
                                        {booking.soc}
                                    </td>
                                    <td className="px-6 py-4">
                                        {booking.pin}
                                    </td>
                                    <td className="px-6 py-4">
                                        {booking.city}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
            </table>
        </div>
    </>
  )
}

export default dashboard