import bg1 from '../../assets/bg1.png'
import bgr1 from '../../assets/bgr1.png'
import bg2 from '../../assets/bg2.png'
import bgr2 from '../../assets/bgr2.png'
import bg3 from '../../assets/bg3.png'

function Slide() {
    return (
        <section className='relative'>
            <div className='absolute w-full h-12 z-100 bottom-0 flex justify-center items-center gap-1'>
                <a href="#slide1" className='w-4 h-4 rounded-full border bg-white'></a>
                <a href="#slide2" className='w-4 h-4 rounded-full border bg-white'></a>
                <a href="#slide3" className='w-4 h-4 rounded-full border bg-white'></a>
            </div>
            <div className="carousel w-full md:text-start text-center">
                <div id="slide1" className="carousel-item relative w-full min-h-[90vh] ">
                    <img
                        src={bg1}
                        className="slider_img" />
                    <div className='z-10 md:flex lg:w-[80vw] md:w-[90vw] mx-auto justify-evenly items-center px-10'>
                        <div className='w-full'>
                            <h1 className=''>
                                <p className='text-rose-500 text-xl font-medium'>Fastest Delivery & Easy Pickup</p>
                                <h2 className='text-yellow-500 text-7xl font-bold my-5'>Kings Burger</h2>
                                <p className='text-white font-thin mt-5'>
                                    Good food starts with good ingridients. We only
                                    bring you the best.
                                </p>
                            </h1>
                            <button className='btn_border text-sm my-5'>View Our Menu</button>
                        </div>
                        <div>
                            <img className='w-full ' src={bgr1} alt="burger image" />
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full min-h-[90vh]">
                    <img
                        src={bg2}
                        className="slider_img" />
                    <div className='z-10 md:flex lg:w-[80vw] md:w-[90vw] mx-auto justify-evenly items-center px-10'>
                        <div className='w-full'>
                            <h1 className=''>
                                <h2 className='text-black font-semibold text-7xl'>
                                    Best Food for
                                    <p className='bg-yellow-500 rounded-3xl px-5 -translate-x-5 inline-block'>Best Restaurants</p>
                                </h2>
                                <p className='my-5'>Since 1990 to present</p>
                            </h1>
                            <form action="" className='md:w-2/3 w-full grid grid-cols-2 items-center gap-3'>
                                <input type="number" placeholder="No Of Guests" className="input col-span-2 w-full" />
                                <input type="date" placeholder="No Of Guests" className="input" />
                                <input type="time" placeholder="No Of Guests" className="input" />

                                <button className='btn_border text-sm my-2'>Reserve a table</button>
                            </form>
                        </div>
                        <div>
                            <img className='w-full ' src={bgr2} alt="burger image" />
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full min-h-[90vh] ">
                    <img
                        src={bg3}
                        className="slider_img" />
                    <div className='flex px-10 lg:w-[80vw] md:w-[90vw] mx-auto justify-between items-center z-10'>
                        <div className='text-white md:w-1/2'>
                            <h1>
                                <h2 className='text-5xl font-semibold '>The Perfect Space to
                                    Enjoy Fantastic Food
                                </h2>
                                <p className='my-5 font-thin'> Festive dining at Farthings where we are strong believers in
                                    using the very best produce</p>
                            </h1>
                            <button className="btn_border text-sm">See Our Menus</button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Slide