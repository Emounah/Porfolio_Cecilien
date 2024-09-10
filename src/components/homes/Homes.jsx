import React from 'react'
import Home from '../home/Home'
import About from '../about/About'
import Education from '../education/Education'
import Skills from '../skills/Skills'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
function Homes({activeLink,isHtmlCompt,data}) {
  return (
    <>
      <Home data = {data} />
      <About activeLink={activeLink}/>
      <Education activeLink={activeLink}/>
      <Skills activeLink={activeLink} isHtmlCompt = {isHtmlCompt} />
      <Contact activeLink={activeLink}/>
      <Footer />
    </>
  )
}

export default Homes