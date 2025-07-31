import React from 'react'

function Product_card({ product }) {
    const { name, price, discount, image } = product;
  return (
    <div className='overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-500'>
      <div className='h-40 p-4'>
        <img className='w-full h-full object-contain' src={`${import.meta.env.BASE_URL}/assets/items/${image}`} alt="" />
      </div>
      <div className='text-center py-4 px-1'>
        {
            discount > 0 ? <div className="font-medium text-sm flex gap-1 flex-wrap justify-center items-end">
            <p className='p-1 bg-yellow-500 rounded'>-{discount}%</p>
            <p>{price - (price * discount / 100)}৳</p>
            <del className='text-gray-500'>{price}৳</del>
        </div> : <p className='text-sm font-bold'>{price}৳</p>
        }
        <h3 className='font-semibold mt-2'>{name}</h3>
      </div>
    </div>
  )
}

export default Product_card
