import Jumbotron from '../components/Jumbotron'
import Expertise from '../components/Expertise'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Experience from '@/components/Experience'
import Projects from '@/components/Project'
import About from '@/components/About'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f17] text-slate-200">
      <div className="container max-w-5xl mx-auto px-6 py-10">
        <Jumbotron />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}