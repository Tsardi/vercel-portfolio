import './App.css'
import About from './components/about'
import Projects from './components/projects'
import Navbar from './components/navbar'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Projects />
        <section id="contact" className="section contact-section">
          <h1>Contact</h1>
          <p>Get in touch at <a href="mailto:nidras33@gmail.com">terrence@example.com</a></p>
        </section>
      </main>
    </>
  )
}

export default App
