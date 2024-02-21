import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Services from '../../components/Services/Services'

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