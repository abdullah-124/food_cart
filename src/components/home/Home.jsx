import React from 'react'
import Slide from './Slide'
import PopularProducts from './PopularProducts'
import Featured_card from './Featured_card'
import DiscountSection from './DiscountSection'
import Products from '../Products/Products'
import Features from './Features'
import Delivery from './Delivery'
import Sponsor_gallery from './Sponsor_gallery'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <Slide />
      <PopularProducts />
      <Featured_card />
      <DiscountSection />
      <section>
        <Products limit={12} />
        <div className='text-center'>
          <Link to='/products/' className='inline-block mb-10 btn_border'>View More</Link>
        </div>
      </section>
      <Features />
      <Delivery />
      <Sponsor_gallery />
      <Footer />
    </>
  )
}

export default Home