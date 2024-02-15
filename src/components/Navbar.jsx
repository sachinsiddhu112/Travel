import React,{useState} from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { SiYourtraveldottv } from "react-icons/si";
 const Navbar=()=> {
  const [nav,setNav]=useState(false);

  const handleNav=() => {
    setNav(!nav);
    if(!nav){
        document.body.style.overflow="hidden";
    }
    else{
        document.body.style.overflow="scroll";
    }
  }

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <div className='flex flex-row'><SiYourtraveldottv size={30} />
      <h1 className='text-white font-bold text-2xl z-20 px-4'> Experiences</h1></div>
      
      <CgMenuGridR onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
      <div className={nav?
        'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/80 flex-col z-10':"absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"}>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
            <li className='font-bold text-2xl p-8 cursor-pointer'>Home</li>
            <li className='font-bold text-2xl p-8 cursor-pointer'>Destination</li>
            <li className='font-bold text-2xl p-8 cursor-pointer'>Reservation</li>
            <li className='font-bold text-2xl p-8 cursor-pointer'>Amenities</li>
            <li className='font-bold text-2xl p-8 cursor-pointer'>Rooms</li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
;