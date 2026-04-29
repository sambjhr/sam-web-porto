import Jumbotron from '../components/Jumbotron'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Projects from '../components/Project'
import Experience from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0b0f17] text-gray-900 dark:text-slate-200">
      <div className="container max-w-5xl mx-auto px-6 pb-10">
        <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center">
          <Jumbotron />
        </section>

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
