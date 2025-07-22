import React from 'react'

function Footer() {
    return (
        <footer className='text-sm w-full relative'>
            <img className='absolute top-0 left-0 -z-10 w-full h-full object-cover' src='/assets/footer.png' alt='Footer' />
            <div className='lg:w-3/4 mx-auto grid md:grid-cols-3 gap-4 sm:grid-cols-2 grid-cols-1 py-10 '>
                <div className='p-4 rounded-2xl bg-rose-500 flex flex-col justify-between text-white'>
                    <h3 className='text-lg font-semibold'>Food Cart</h3>
                    <p>Tuesday – Saturday: 12:00pm – 23:00pm <br />Closed on Sunday</p>
                    <p>5 star rated on TripAdvisor</p>
                </div>
                {/* newslatter */}
                <div className='sm:text-start text-center'>
                    <h5 className='inline-block text-2xl font-bold border-b border-yellow-500'>Newslatter</h5>
                    <form action="">
                        <p className='my-5'>Get recent news and updates.</p>
                        <input type="text" placeholder="Type here" className="input focus:outline-none" />
                        <button className='block btn_border my-6'>Subscribe</button>
                    </form>
                </div>
                <div className='  flex justify-evenly'>
                    <div className='text-start'>
                        <h5 className='inline-block text-2xl font-bold border-b border-yellow-500'>About</h5>
                        <ul>
                            <li>Fredoka One</li>
                            <li>Food Cart</li>
                            <li>Our Story</li>
                            <li>Special Dish</li>
                            <li>Reservation</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='text-end'>
                        <h5 className='inline-block text-center text-2xl font-bold border-b border-yellow-500'>Menu</h5>
                        <ul>
                            <li>Steaks</li>
                            <li>Burgers</li>
                            <li>Coctails</li>
                            <li>Bar B Q</li>
                            <li>Desserts</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}



export default Footer