import React from 'react'
import './Contact.css'
function Contact({activeLink}) {
  return (
    <section className="contact" id="contact">
     <h2 className={activeLink === "contact"?"heading heading-contact-vue":"heading"}>Contactez <span>moi</span>{/*<span className="animate" style="--i:1;"></span>*/}</h2> 
    <form action="#" className="formContact">
      <div className="input-box">
          <div className={activeLink === "contact"?"input-field input-field-vue":"input-field"}>
                <input type="text" name="" id="" required="required"/>
                <span className="indicateur">Nom et Prénom</span>
              <span className="focus"></span>
          </div>
          <div className={activeLink === "contact"?"input-field input-field-vue":"input-field"}>
                <input type="email" name="" id="" required="required" />
                <span className="indicateur">email</span>
              <span className="focus"></span>
          </div>
          {/* <span className="animate" style="--i:3;"></span> */}
      </div>
      <div className="input-box">
          <div className={activeLink === "contact"?"input-field input-field-vue":"input-field"}>
                <input type="number" name="" id="" required="required"/>
                <span className="indicateur">Numero Mobile</span>
              <span className="focus"></span>
          </div>
          <div className={activeLink === "contact"?"input-field input-field-vue":"input-field"}>
                <input type="text" name="" id="" required="required" />
                <span className="indicateur">Sujet du courriel</span>
              <span className="focus"></span>
          </div>
      </div>
      <div className={activeLink === "contact"?"textarea-field textarea-field-vue":"textarea-field"}>
          <textarea name="" id="" cols="30" rows="10" placeholder="" required></textarea>
          <span className="indicateur">Votre Message</span>
          <span className="focus"></span>
      </div>
      <div className="contact-footer">
        
      </div>
      <div className={activeLink === "contact"?"btn-box btns btns-vue":"btn-box btns"}>
           <button type="submit" className="btn">Envoyer</button>
      </div>
    </form>
  </section>
  )
}

export default Contact