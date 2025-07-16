
import './App.css'
import Slide from './components/home/Slide'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <main className='container mx-auto'>
        <Navbar />
        <section className='my-5 rounded-lg overflow-hidden'>
          <Slide />
        </section>
      </main>
    </>
  )
}

export default App
