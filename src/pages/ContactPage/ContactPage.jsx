import React from 'react'
import Contact from '../../components/Contact/Contact'
import ContactUs from '../../components/ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

const ContactPage = () => {
  return (
    <>
    <NavigationBar/>
    <Contact/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default ContactPage