import Image from 'next/image'
import Link from 'next/link'
import { Header, Hero, Features, ProductShowcase, Benefits, Testimonials, Contact, Footer } from './components'


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ProductShowcase />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
