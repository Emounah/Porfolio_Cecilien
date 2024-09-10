import React from 'react'
import './About.css'
function About({activeLink}) {
  return (
    <section className="about" id="about">
    <h2 className={activeLink==="about"?"heading heading-vue":"heading"}>A propos <span>de moi</span>{/*<span class="animate" style="--i:1;"></span>*/}</h2>
    {/* <h3 className={activeLink==="about"?"h3 h3-vue":"h3"}>Developpeur Full Stack</h3> */}
   <div className="about-section">
    <div class={activeLink === "about"?"about-img about-img-vue":"about-img"}>
        <img src="./src/assets/images/image456.png" alt="" />
        <span class="circle-span"></span>
        {/* <span class="animate" style="--i:3;"></span> */}
    </div>
    <div className={activeLink === "about"?"about-content about-content-vue":"about-content"}>
            <div className="about-enfant">
                <div className="about-colomn about-front">
                        <h3>Nom : <span>BOTRALAHY</span></h3>
                        <h3>Prénom : <span>Solofoson Cécilien</span></h3>
                        <h3>Date et lieu de naissance : <span> 05 août 1997 à Mahajanga</span></h3>
                        <h3>Sexe :  <span>Masculin</span></h3>
                        <h3>Nationalité : <span>Malagasy</span></h3>
                        {/* <h3>Situation matrimoniale : <span>Célibataire</span></h3> */}
                        <h3>Contact :  <span>0328492100/0348928833</span></h3>
                        <h3>Adresse :  <span>Lot Vt85 NKA Andohanimandroseza</span></h3>
                </div>
            </div>
    </div>
   </div>
        <div className={activeLink === "about"?"btn-box btns btnabout btnabout-vue":"btn-box btns btnabout"}>
            <a href="./src/assets/CV/CV.pdf" download="CV.pdf" className="btn btnabout"><i className='fas fa-download'></i>C.V</a>
        </div>

        <div className="ombre"></div>
</section>
  )
}

export default About