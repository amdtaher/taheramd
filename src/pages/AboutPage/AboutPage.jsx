import React from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Services from '../../components/Services/Services'
import Footer from '../../components/Footer/Footer'

const AboutPage = () => {
  return (
    <>
    <NavigationBar/>
    <About/>
    <Services/>
    <Skills/>
    <Footer/>
    </>
  )
}

export default AboutPage