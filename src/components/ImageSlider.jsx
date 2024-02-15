import React, { useState } from 'react'
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io"
export default function ImageSlider() {
    const slides = [
        {
            url: "https://i.postimg.cc/J0553JzB/hamburger-494706-1920.jpg",
            title: "Hamburger"
        },
        {
            url: "https://i.postimg.cc/kg4v823B/pancakes-4410605-1920.jpg",
            title: "Pancakes"
        },
        {
            url: "https://i.postimg.cc/tTwmYFmd/ukrainian-dill-potatoes-2652561-1920.jpg",
            title: "Ukrainian Dill Potatoes"
        },
        {
            url: "https://i.postimg.cc/dt8SVkRd/coffee-6023991-1920.jpg",
            title: "Breakfast Coffee"
        },
        {
            url: "https://i.postimg.cc/QNKyvnHf/sushi-balls-5878892-1920.jpg",
            title: "Sushi Balls"
        },
        {
            url: "https://i.postimg.cc/YCRnQ5sC/salmon-518032-1920.jpg",
            title: "Salmon"
        },
        {
            url: "https://i.postimg.cc/3xF6n4d7/pasta-527286-1920.jpg",
            title: "Pasta"
        },
        {
            url: "https://i.postimg.cc/prjc8ygw/barbecue-1836053-1920.jpg",
            title: "Barbecue Chicken"
        },


    ]

    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = index === 0 ? slides.length - 1 : index - 1;
        setIndex(newIndex);
    }

    const nextSlide = () => {
        const newIndex = index === slides.length - 1 ? 0 : index + 1;
        setIndex(newIndex);
    }
    return (
        <div className='max-w-[1400px] h-[500px] w-full ma-auto py-16 px-4 relative group mx-auto'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{ backgroundImage: `url(${slides[index].url})` }}>

            </div>

            <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2cursor-pointer text-white'>
                <IoIosArrowDropleft size={30} onClick={prevSlide} />
            </div>

            <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 cursor-pointer text-white'>
                <IoIosArrowDropright size={30} onClick={nextSlide} />
            </div>
        </div>
    )
}
