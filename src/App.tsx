import { Header } from './components/Header'
import { DecoreBlob } from './components/DecoreBlob'
import { Planes } from './components/Planes'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { TopDest } from './components/TopDest'
import { Trips } from './components/Trips'
import { Testimonials } from './components/Testimonials'
import './App.css'
import { Airlines } from './components/Airlines'
import { Subscription } from './components/Subscription'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className='outer-container'>
      <Header />
      <DecoreBlob />
      <Planes />
      <Hero />
      <Services />
      <TopDest />
      <Trips />
      <Testimonials />
      <Airlines />
      <Subscription />
      <Footer />
    </div>
  )
}

export default App
