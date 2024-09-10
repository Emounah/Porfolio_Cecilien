
import './Header.css'
import { Link } from 'react-router-dom';
function Header({backcolor,isMenu,sectionIds,secID,activeLink,setIsMenu,scrollToSection}) {
  return (
   <header className={backcolor ? 'header backHeader':'header'} id="header">
    <a href="#" className="logo">CCL.codeur <span className="animate"  /* style="--i:1;" */ ></span></a> 
    <ul className={isMenu ? "nav active":"nav"}>
      {
        sectionIds.map((sectionId, i) =>(
          <li className={activeLink === secID[i] ? "nav-item active":"nav-item" } key={i} onClick={()=>{scrollToSection(secID[i]);setIsMenu(false)}}>
            <Link to="/" className="nav-link">{sectionId}</Link>
          </li>
        ))}

        <span className="active-nav"></span>
         <span className="animate" /* style="--i:2;" */ ></span> 
    </ul>
    <div className="bars" onClick={()=> setIsMenu(!isMenu)}>
        <div className={isMenu ? "bar bar0":"bar"}></div>
        <div className={isMenu ? "bar bar1":"bar"}></div>
        <div className={isMenu ? "bar bar2":"bar"}></div>
        <span className="animate" /* style="--i:2;" */ ></span>
    </div>
   </header>
  )
}

export default Header