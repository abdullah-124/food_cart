import React from 'react'

function PopularProducts() {
  return (
    <div className='min-h-[600px] lg:w-3/4 m-auto py-20 '>
      <div>
        <p className='text-rose-500'>crispy, every bite taste</p>
        <h2 className='text-4xl font-semibold'>Popular Food Items</h2>
      </div>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        <div className='popular_card'>
          <img src='/src/assets/items/item1.png' alt='Popular Food Item' className='w-full max-h-[200px] object-cover' />
          <div className='text-center font-semibold py-2'>
            <h3 className='text-2xl font-semibold mt-2'>Chicken</h3>
          <p className='text-gray-600'>3 Products</p>
          </div>
        </div>
        <div className='popular_card'>
          <img src='/src/assets/items/item2.png' alt='Popular Food Item' className='w-full max-h-[200px] object-cover' />
          <div className='text-center font-semibold py-2'>
            <h3 className='text-2xl font-semibold mt-2'>French Fries</h3>
          <p className='text-gray-600'>12 Products</p>
          </div>
        </div>
        <div className='popular_card'>
          <img src='/src/assets/items/item3.png' alt='Popular Food Item' className='w-full max-h-[200px] object-cover' />
          <div className='text-center font-semibold py-2'>
            <h3 className='text-2xl font-semibold mt-2'>Pizza</h3>
          <p className='text-gray-600'>10 Products</p>
          </div>
        </div>
        <div className='popular_card'>
          <img src='/src/assets/items/item4.png' alt='Popular Food Item' className='w-full max-h-[200px] object-cover' />
          <div className='text-center font-semibold py-2'>
            <h3 className='text-2xl font-semibold mt-2'>Burger</h3>
          <p className='text-gray-600'>5 Products</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularProducts