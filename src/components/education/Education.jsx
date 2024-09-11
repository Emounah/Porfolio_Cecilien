import React, { useState } from 'react'
import './Education.css'
function Education({activeLink}) {
    // const [educationh3, setEducationh3] = useState("color:green;");

    return (
        <section className="education" id="education">
            <h2 className={activeLink === "education"?"heading heading-education-vue":"heading"}>Mes <span>Parcours</span></h2>
            <p className={activeLink==="education"?"educationp educationp-vue":"educationp"}>J'ai un diplôme de Licence en Informatique et Télécomunications. <br /> Et je suivais la formation au centre de formation chez l'Hopes Formation, <br /> et j'ai eu un Certificat. {/*<span class="animate" style="--i:4;"></span>*/}
            </p>
            <div className="education-row">
                <div className="education-column">
                    <h3 className="title">Educations{/* <span className="animate" style={{'--i:1'}}></span>*/}</h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className="fas fa-calendar-days"></i> 2021 - 2023</div>
                                <h3>Obtention du duplôme de Licence en Informatique et Télécomunications - Université ISPM</h3>
                              
                                    <div className= {activeLink === "education"?"btn-box btns btnabout btnabout-education-vue btnaboutattest":"btn-box btns btnabout btnaboutattest"}>
                                        <a  href="./src/assets/CV/Attestation_Duplome.pdf" download="Attestation_Duplôme.pdf" className="btn btnabout"><i className='fas fa-download'></i>Attestation</a>
                                    </div>
                                
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className="fas fa-calendar-days"></i> 2020 - 2021</div>
                                <h3>L3 en Informatique et Télécomunications - Université ISPM</h3>
                                <p>
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className="fas fa-calendar-days"></i> 2019 - 2020</div>
                                <h3>L2 en Informatique et Télécomunications - Université ISPM</h3>
                                <p>
                                </p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className="fas fa-calendar-days"></i> 2018 - 2019</div>
                                <h3>L1 en Informatique et Télécomunications - Université ISPM</h3>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                     <span className={activeLink==="education"?"animateEducation-column animateEducation-column-vue":"animateEducation-column"}></span>
                </div>

                <div className="education-column">
                    <h3 className="title">Experiences{/* <span class="animate" style="--i:5;"></span>*/}</h3>

                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className="fas fa-calendar-days"></i> 2020 - 2021</div>
                                <h3>Grand Projet - Université ISPM</h3>
                                <p>Réalisation d’un logiciel,
                                    d’où le thème est « Statistique des employées
                                    dans le secteur de travail ».

                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className="fas fa-calendar-days"></i> 2019 - 2020</div>
                                <h3>Grand Projet - Université ISPM</h3>
                                <p>Réalisation d’un logiciel, d’où
                                    le thème est « Logiciel des Centres Hospitaliers ».
                                </p>
                            </div>
                        </div>

                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className="fas fa-calendar-days"></i> 2024</div>
                                <h3>Mi-Projet - Hopes Formation</h3>
                                <p>Réalisation d’une application Web,
                                    d’où le thème est « Digitalisation du Carnet FOKONTANY ».
                                </p>
                                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="./src/assets/images/fkt1.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt2.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Tempo gaigy</h5>
                                                    <p>ced vkjezvnekrjnbrekjbnrekbnrdkjbnrkbnrkbn fezfvezvezgvez.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt3.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt4.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt6.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt7.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt8.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt10.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt15.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt16.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt17.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt18.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/fkt19.png" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                                <h3 className='mt-5'>Grand-projet - Hopes Formation</h3>
                                <p>Réalisation d’une application Web,
                                    d’où le thème est « Résérvation d'hotel ».
                                </p>
                                <div id="carouselExampleFade2" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="./src/assets/images/imageH1.jpeg" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/imageH2.jpeg" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/imageH3.jpeg" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/imageH4.jpeg" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/imageH5.jpeg" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./src/assets/images/imageH6.jpeg" alt="" />
                                            {/* <div class="carousel-caption d-none d-md-block">
                                                    <h5>Third Slide label</h5>
                                                    <p>Some representative placeholder content for the third slide.</p>
                                                </div> */}
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className={activeLink==="education"?"animateEducation-column2 animateEducation-column2-vue":"animateEducation-column2"}></span>
                </div>
            </div>
           
        </section>
    )
}

export default Education