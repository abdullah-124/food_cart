import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";

function DiscountSection() {
    return (
        <div className='min-h-[300px] lg:w-3/4 m-auto py-5 relative'>
            <img src="/assets/bg4.png" alt="background" className='rounded-lg -z-1 absolute inset-0 w-full h-full object-cover' />
            <div className="flex sm:flex-row flex-col gap-3 items-center justify-center">
                <div className='z-1 text-white ps-5 md:ps-10 w-full'>
                    <h2 className='text-5xl font-semibold pb-3'>Today's <span className='text-yellow-500'>Astackin</span> Day</h2>
                    <p>Big Size <span className='text-yellow-500'>Grilled $59,00</span></p>
                    <button className='btn_border mt-5 flex items-center gap-2'><CiDeliveryTruck /> Order Now</button>
                </div>
                <div className='w-full'>
                    <img src="./assets/chicken_discount.png" alt="chicken" />
                </div>
            </div>
        </div>
    )
}

export default DiscountSection