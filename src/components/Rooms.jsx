import React from 'react'

export default function Rooms() {
  return (
    <div className='max-w-[1400px] h-[450px] bg-blue-200 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text--2xl font-bold'>Fine Interior Rooms</h3>
            <p className='pt-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas possimus minus quaerat accusamus sunt dolorem veritatis, dolorum quasi voluptatibus ea ipsa odio autem natus totam odit fugit aspernatur facilis obcaecati?
            </p>
        </div>
      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img className='object-cover w-full h-full' src="https://i.postimg.cc/63jDzKYH/hotel-room-1261900-1920.jpg" alt="loading" />
        <img className=' row-span-2 object-cover w-full h-full' src="https://i.postimg.cc/9fF4qPSG/resort-4369984-1920.jpg" alt="loading" />
        <img className='object-cover w-full h-full' src="https://i.postimg.cc/gjc3cFpP/bedroom-349701-1920.jpg" alt="loading" />
      </div>
    </div>
  )
}
