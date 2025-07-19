
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <main className='container md:px-0 px-5 mx-auto'>
        <Navbar />
        <section className='my-5 rounded-lg overflow-hidden'>
          <Home />
        </section>
      </main>
    </>
  )
}

export default App
