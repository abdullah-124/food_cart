
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/Navbar'
import Products from './components/Products/Products'

function App() {

  return (
    <>
      <main className='container md:px-0 px-5 mx-auto'>
        <Navbar />
        <section className='my-5 rounded-lg overflow-hidden'>
          <Routes>
            <Route path='/food_cart/' element={<Home/>} />
            <Route path='/products/' element={<Products/>} />
          </Routes>
        </section>
      </main>
    </>
  )
}

export default App
