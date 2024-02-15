import React from 'react'

export default function Hero() {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src="https://i.postimg.cc/g0h5dTbN/maldives-1993704-1920.jpg" alt="loading" />

      <div className='bg-black/20 absolute top-0 left-0 w-full h-screen'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p>All Inclusive</p>
            <h2 className='font-bold text-5xl md:text-5xl drop-shadow-2xl'>Private Beaches & Gateways</h2>
            <p className='max-w-[600px drop-shadow-2xl py-2 text-xl' >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe possimus atque quis totam quasi sint mollitia ipsum consectetur magni facere?
            </p>
            <button className=''>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}
