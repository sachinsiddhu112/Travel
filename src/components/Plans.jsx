import React from 'react'

export default function Plans() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2 hover:scale-105 ease-in duration-100 border-round' 
        src="https://i.postimg.cc/VNprcWbF/beach-1868716-1280.jpg" alt="loading" />

        <img className='row-span-2 object-cover w-full h-full p-2 hover:scale-105 ease-in duration-100' 
        src="https://i.postimg.cc/W4FzSqfq/beach-1867137-1280.jpg" alt="loading" />

        <img className='row-span-2 object-cover w-full h-full p-2 hover:scale-105 ease-in duration-100' 
        src="https://i.postimg.cc/4yMF6MK9/sandcastle-766949-1920.jpg" alt= "loading" />

        <img className='row-span-3 object-cover w-full h-full p-2 hover:scale-105 ease-in duration-100' 
        src="https://i.postimg.cc/KjHBRh1d/girl-5183752-1920.jpg" alt="loading" />

        <img className='row-span-2 object-cover w-full h-full p-2 hover:scale-105 ease-in duration-100' 
        src="https://i.postimg.cc/N066bnnH/castle-7705682-1920.jpg" alt="loading" />
       
      </div>

      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-4xl md:text-5xl font-bold py-4'>Plan Your Next Trip</h3>
        <p className='text-2xl py-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, facere!</p>
        <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores doloremque recusandae, et beatae ratione iste accusamus ipsam nemo culpa in?</p>

        <div>
            <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
            <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
    </div>
  )
}
