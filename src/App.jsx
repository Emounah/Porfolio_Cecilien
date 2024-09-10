import { useEffect, useState } from 'react'
import React from 'react'
import Header from './components/header/Header'
import Homes from './components/homes/Homes'
import {slides} from "./data/carouselData.json"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const secID = ['home','about','education','skills','contact'];
const sectionIds = ["Accueil","A propos","Educations","Compétences","Contact"];
function App() {
  const [backcolor, setBackColor] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isHtmlCompt, setHtmlCompt] = useState(0);


  const changeBackColor = () =>{
    if (window.scrollY >= 90 ) {
      setBackColor(true);
    }else{
      setBackColor(false);
    }
  }
    window.addEventListener("scroll", changeBackColor);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const marginTop = 0;
        const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
        window.scrollTo({ top: scrollToY, behavior: "smooth"});
      }
    }
  const determineActiveSection = () =>{
    for (let i = secID.length-1; i >= 0; i--) {
      const section = document.getElementById(secID[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(secID[i]);
          setIsMenu(false);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () =>{
      if (window.scrollY > 300) {
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
      determineActiveSection();
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);


  useEffect(() => {
   
      const intervale = setInterval(() =>{
        if (activeLink === "skills") {
          setHtmlCompt((prevCounter) => {
            if(prevCounter === 40) {
                clearInterval(intervale);
                return prevCounter;
             }else {
                return prevCounter + 1;
             }          
           
          })
        }else{
          setHtmlCompt(0);
        }
            
      },20);
      
      return () => {
        clearInterval(intervale);
      }
      
  },[]);

  console.log(activeLink);
 
  
  return (
    <BrowserRouter>
      <Header backcolor={backcolor} isMenu={isMenu} sectionIds={sectionIds} secID={secID} activeLink={activeLink} scrollToSection={scrollToSection} setIsMenu={setIsMenu}/>
      <Routes>
         <Route path='/' element={<Homes activeLink={activeLink} isHtmlCompt={isHtmlCompt} data={slides} />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <Header />
    //   <Home />
    //   <About />
    //   <Education />
    //   <Skills />
    //   <Contact />
    //   <Footer />
    // </>
  )
}

export default App