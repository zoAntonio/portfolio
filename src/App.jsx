import { BrowserRouter } from 'react-router-dom'
import Navbar             from './components/Navbar'
import Sidebar            from './components/Sidebar'
import ParticleBackground from './components/ParticleBackground'
import Footer             from './components/Footer'
import Hero               from './pages/Hero'
import About              from './pages/About'
import Projects           from './pages/Projects'
import Contact            from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0a0a0a] min-h-screen">
        <ParticleBackground />
        <Navbar />
        <Sidebar />
        <main className="relative pb-16 md:pb-0 md:pl-16" style={{ zIndex: 1 }}>
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
