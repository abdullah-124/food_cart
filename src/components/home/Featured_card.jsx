import React from 'react'

function Featured_card() {
  return (
    <div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 lg:w-3/4 mx-auto overflow-hidden mb-10">
            <img className='h-full w-full' src="/src/assets/card/card1.png" alt="" />
            <img className='h-full w-full col-span-2' src="/src/assets/card/card2.png" alt="" />
        </div>
    </div>
  )
}

export default Featured_card