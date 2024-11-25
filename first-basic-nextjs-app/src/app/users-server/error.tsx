"use client"

import { useEffect } from "react"



export default function Error({error}: {error : Error}) {

    useEffect(() => {

        console.log(error);

    },[error])

    return (

        <div>
            Error Fetching user data!
        </div>

    )

}