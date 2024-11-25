"use client"
import React from 'react'
import { useState } from 'react'

import { useAuth, useUser } from '@clerk/nextjs'

const Counter = () => {


    //const { isLoaded, userId, sessionId, getToken } = useAuth(); // this is suitable for auth on client rendered pages

    const {isLoaded, isSignedIn, user} = useUser(); // alternative
    

    console.log("Counter Component");

    const [count,setCount] = useState(0);

    //this must be done after invoking usestate
    if(!isLoaded || !isSignedIn) {
        return null;
    }

    return (

        <button className='bg-vmsgreen p-4 rounded' onClick={
            
            () => setCount(count+1)
        }>
        Clicked {count} times.
        </button>

    )
}

export default Counter