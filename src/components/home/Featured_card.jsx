import React from 'react'

function Featured_card() {
  return (
    <div>
        <div className="grid md:grid-cols-5 grid-cols-1 gap-2 lg:w-3/4 mx-auto overflow-hidden mb-10">
            <img className='col-span-2 h-full w-full' src="/assets/card/card1.png" alt="" />
            <img className='h-full w-full col-span-3' src="/assets/card/card2.png" alt="" />
        </div>
    </div>
  )
}

export default Featured_card
