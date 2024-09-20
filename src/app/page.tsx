import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Skills from './components/Skills/Skills'
import Skills2 from './components/Skills/Skills2'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Skills />
      <Skills2 />
      <Projects />
      <Contact />
    </main>
  )
}