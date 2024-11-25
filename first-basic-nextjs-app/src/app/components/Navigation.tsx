"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignInButton, UserButton } from '@clerk/nextjs'

const Navigation = () => {

    const pathName = usePathname();

    return (
        <nav>
            <Link href="/" className={pathName === '/' ? 'text-green font-medium mr-4':'text-slate-200 mr-4'}>Home</Link>
            <Link href="/about" className={pathName === '/about' ? 'text-green font-medium mr-4':'text-slate-200 mr-4'}>About</Link>
            <Link href="/product/1" className={pathName.startsWith('/product/') ? 'text-green font-medium mr-4':'text-slate-200 mr-4'}>FirstProd</Link>
            <SignInButton mode='modal'/>
            <UserButton/>
        </nav>

    )
}

export default Navigation