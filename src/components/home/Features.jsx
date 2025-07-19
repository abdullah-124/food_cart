import React from 'react'
import { BiBadgeCheck } from "react-icons/bi";
import { TbBowlSpoon } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { SiCodefresh } from "react-icons/si";
function Features() {
    return (
        <div className='lg:w-3/4 mx-auto bg-rose-500 text-white px-5 py-10 rounded-lg mb-10'>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
                <div>
                    <BiBadgeCheck className='text-5xl text-yellow-500 mb-4' />
                    <h3 className='text-xl font-medium uppercase'>Super Quality Food</h3>
                    <p className='text-light text-sm mt-4'>A team of dreamers and doers building unique interactive music and art</p>
                </div>
                <div>
                    <TbBowlSpoon className='text-5xl text-yellow-500 mb-4' />
                    <h3 className='text-xl font-medium uppercase'>ORIGINAL RECIPES</h3>
                    <p className='text-light text-sm mt-4'>A team of dreamers and doers building unique interactive music and art</p>
                </div>
                <div>
                    <CiDeliveryTruck className='text-5xl text-yellow-500 mb-4' />
                    <h3 className='text-xl font-medium uppercase'>QUICK FAST DELIVERY</h3>
                    <p className='text-light text-sm mt-4'>A team of dreamers and doers building unique interactive music and art</p>
                </div>
                <div>
                    <SiCodefresh className='text-5xl text-yellow-500 mb-4' />
                    <h3 className='text-xl font-medium uppercase'>100% FRESH FOODS</h3>
                    <p className='text-light text-sm mt-4'>A team of dreamers and doers building unique interactive music and art</p>
                </div>
            </div>
        </div>
    )
}

export default Features