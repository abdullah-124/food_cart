import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'

function Delivery() {
    return (
        <div className='lg:w-3/4 mx-auto bg-rose-500 p-5 rounded-lg text-white mb-10'>
            <div className='grid sm:grid-cols-2 grid-cols-1 md:gap-5 gap-2 items-center'>
                <div>
                    <p>Crispy, Every Bite Taste</p>
                    <h3 className='my-3 text-5xl font-semibold'>30 Minutes Fast <span className='text-yellow-500'>Delivery</span> Challenge</h3>
                    <button className='flex gap-2 items-center hover:text-rose-500 bg-white text-black rounded p-2'>
                        <CiDeliveryTruck className='text-2xl text-rose-500' />
                        Order Now
                    </button>
                </div>
                <div>
                    <img src="./assets/delivery.png" alt="delivery man" />
                </div>
            </div>
        </div>
    )
}

export default Delivery