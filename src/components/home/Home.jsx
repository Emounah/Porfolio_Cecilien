import React from 'react'
import '../../assets/fontawsome/css/all.min.css'
import './Home.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
function Home({ data }) {
    return (
        <section className="home show-animate" id="home">
            <div className="home-content">
                <h1>Bonjour, Je suis <span>BOTRALAHY Solofoson Cécilien</span>{/*<span class="animate" style="--i:1;"></span>*/}</h1>
                <br /><div className="text-animate">
                    <h3>
                        Développeur 
                        <h3 className='fac2'>
                            <h3 className='fac3'>
                            <h3 className='fac4'>
                               <h3><span>F</span><span>R</span> ONT-</h3> 
                               <h3>BACK-</h3> 
                            </h3>
                            </h3>
                        </h3>
                        <h3 className='face face1'>
                        END
                        </h3>

                    </h3>
                        
                    {/* <span class="animate" style="--i:3;"></span>*/}
                </div>
                <p>Si vous voulez un développeur web, n'hésitez pas à me contacter pour que nous puissions parler de votre besoin. Merci de votre confiance ! {/*<span class="animate" style="--i:4;"></span>*/}
                </p>
               
            </div>

            {/* <div className="home-sci">
                <a href="tel:+261328492100"><i className="fab fa-whatsapp"></i></a>
                <a href="http://"><i className="fab fa-git"></i></a>
                <a href="mailto:solofosoncecilienbotralahy@gmail.com"><i className="fas fa-envelope"></i></a>
            </div> */}

            <div className="home-photo">
                <div className="home-photo-content">
                    {/* <button className="photo-i"><i className='fas fa-camera'></i></button> */}
                  
                    <div className="home-photo-card">
                        {/* <img src="./src/assets/images/sary2.png" alt="" /> */}
                        <img src="./src/assets/images/sary1.jpg" alt="" />
                        <img src="./src/assets/images/sary3.png" alt="" />
                        <img src="./src/assets/images/image2.png" alt="" />
                    </div>
                    <div className="home-sci">
                        <a href="tel:+261348928833"><i className="fab fa-whatsapp"></i></a>
                        <a href="https://github.com/Emounah/Porfolio_Cecilien.git "><i className="fab fa-git"></i></a>
                        <a href="mailto:solofosoncecilienbotralahy@gmail.com"><i className="fas fa-envelope"></i></a>
                    </div>

                    <div className="btn-box btn-box-home">
                    <a href="./src/assets/CV/CV.pdf" download="CV.pdf" className="btn btn-home"><i className='fas fa-download'></i>  C.V</a>
                    </div>
                </div>
            </div>
            {/* <div className="imge-slide">
            <div id="demo" class="carousel slide" data-bs-ride="carousel">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./src/assets/images/fkt1.png"/>
                    </div>
                    <div class="carousel-item">
                        <img src="./src/assets/images/fkt2.png" alt="" />

                    </div>
                    <div class="carousel-item">
                        <img src="./src/assets/images/fkt3.png" alt="" />
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
            </div> */}
            {/* <div className="image-carousel">
                <BsArrowLeftCircleFill className='arrow arrow-left'/>
                {
                    data.map((item, idx) => {
                        return <img src={item.src} alt="" key={idx} className='slide' />
                    })
                }
                <BsArrowRightCircleFill className='arrow arrow-right'/>
                <span className='indicators'>
                    {
                        data.map((_,idx) => {
                            return <button key={idx} onClick={null} className='indicator'></button>
                        })
                    }
                </span>
            </div> */}
            <div className="home-imgHover">
            </div>
            {/*<span class="animate home-img" style="--i:7;"></span>*/}
        </section>
    )
}

export default Home