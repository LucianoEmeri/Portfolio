import React from 'react'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import Skills2 from '../components/Skills/Skills2'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Banner/>
    <Skills/>
    <Skills2/>
    <Projects/>
    </div>
  )
}

export default Home
