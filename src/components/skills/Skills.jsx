import './Skills.css'
function Skills({activeLink,isHtmlCompt}) {


  return (
    <section className="skills" id="skills">
   <h2 className="heading heading-skills-vue">Mes <span>Compétences</span></h2> 

    <div className="skills-row">
        <div className="skills-column">
            <h3 className="title">Compétences</h3>

            <div className="skills-box">
                <div className="skills-content">
                    <div className="progress">
                        <h3>PHP <span>70%</span></h3>
                        <div className="bar"><span className={activeLink === "skills"?"spanHtml":""}></span></div>
                    </div>
                    <div className="progress">
                        <h3>JavaScript<span>70%</span></h3>
                        <div className="bar"><span className={activeLink === "skills"?"spanCss":""}></span></div>
                    </div>
                    <div className="progress">
                        <h3>Laravel <span>60%</span></h3>
                        <div className="bar"><span className={activeLink === "skills"?"spanJS":""}></span></div>
                    </div>
                    <div className="progress">
                        <h3>REACT <span>50%</span></h3>
                        <div className="bar"><span className={activeLink === "skills"?"spanReact":""}></span></div>
                    </div>
                </div>
                {/* <span className="animate" style="--i:3;"></span> */}
            </div>
        </div>
        
        <div className="skills-column">
            <h3 className="title">Compétences{/*<span className="animate" style="--i:5;"></span>*/}</h3>

            <div className="skills-box">
                <div className="skills-content">
                    <div className="progress">
                        <h3>HTML<span>80%</span></h3>
                        <div className="bar"><span className={activeLink === "skills"?"spanSite":""}></span></div>
                    </div>
                    <div className="progress">
                        <h3>CSS <span>75%</span></h3>
                        <div className="bar"><span className={activeLink === "skills"?"spanDev":""}></span></div>
                    </div>
                    <div className="progress">
                        <h3>SASS <span>70%</span></h3>
                        <div className="bar"><span className={activeLink === "skills"?"spanLogiciel":""}></span></div>
                    </div>
                    <div className="progress">
                        <h3>GIT<span>50%</span></h3>
                        <div className="bar"><span className={activeLink === "skills"?"spanGraphic":""}></span></div>
                    </div>
                </div>
                {/* <span className="animate" style="--i:6;"></span> */}
            </div>
        </div>
    </div>
    <div className="ombre"></div>
</section>
  )
}

export default Skills