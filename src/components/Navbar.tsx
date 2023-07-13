"use client";
import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router";

const Navbar = () => {
const router = useRouter()
  return (
    <div className='h-[6vh] bg-[#d14242] flex  flex-row justify-between'>
    <div><p className=' text-white p-2 text-xl'>Header</p></div>
    <div className=' flex flex-row justify-around'>
    <div><Link href='/component-1'><p className={` text-white ${router.asPath === '/component-1' && 'bg-[#94262671]'}  p-3 text-sm hover:bg-[#94262671]`}>First Component</p></Link></div>
    <div><Link href='/component-2'><p className={` text-white ${router.asPath  === '/component-2' && 'bg-[#94262671]'} p-3 text-sm hover:bg-[#94262671]`}>Second Component</p></Link></div>
    <div><Link href='/component-3'><p className={` text-white ${router.asPath  === '/component-3' && 'bg-[#94262671]'} p-3 text-sm hover:bg-[#94262671]`}>Third Component</p></Link></div>
    </div>
    </div>
  )
}

export default Navbar