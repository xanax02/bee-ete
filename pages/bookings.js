import { useRouter } from "next/router"
import BookingPage from "@/components/BookingPage"

const bookings = () => {

    const router = useRouter();

    const submitBooking = async(details) => {
        const response = await fetch('/api/booking', {
            method: 'POST',
            body: JSON.stringify(details),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        if(data)
        {
            router.push('/');
        }
    }

  return (
    <BookingPage submitBooking={submitBooking} />
  )
}

export default bookings