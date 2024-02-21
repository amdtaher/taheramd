import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ContactPage from '../pages/ContactPage/ContactPage'
import ProjectPage from '../pages/ProjectPage/ProjectPage'
import Projects from '../components/Projects/Projects'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/projects' element={<ProjectPage/>}/>
        <Route exact path='/contact' element={<ContactPage/>}/>
        <Route exact path='/project' element={<Projects/>}/>
      </Routes>
    </>
  )
}

export default AppRouter