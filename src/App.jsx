import { BrowserRouter } from 'react-router-dom'
import Navbar   from './components/Navbar'
import Footer   from './components/Footer'
import Hero     from './pages/Hero'
import About    from './pages/About'
import Projects from './pages/Projects'
import Contact  from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0a0a0a] min-h-screen">
        <Navbar />
        <main>
          <section id="hero">     <Hero />     </section>
          <section id="about">    <About />    </section>
          <section id="projects"> <Projects /> </section>
          <section id="contact">  <Contact />  </section>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
