import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const dashboard = () => {

    const router = useRouter();
    const [isAdmin, setIsAdmin] = useState(true);

    useEffect(() => {
        if(!isAdmin)
        {
            router.replace("/");
        }
    },[])

  return (
    <div>
        <h1 className="text-gray-600 text-6xl">This is the dashboard for admin</h1>
    </div>
  )
}

export default dashboard