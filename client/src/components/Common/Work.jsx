import React from 'react';
import 'react-image-lightbox/style.css';
import { Link } from 'react-router-dom';
 
class Work extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false
    };

    render(){
        return (
            <div id='work'>
                <section className="strategy-area">
                    <div className="container-fluid p-0">
                        <div className="row ">
                            <div className="col-lg-6 col-md-5">
                                <div className="image"></div>
                            </div>
                            
                            <div className="col-lg-6 col-md-7">
                                <div className="about-strategy ptb-80">
                                    <div className="section-title">
                                        <h2><span>Staff Augmentation</span></h2>
                                        <p>Los recursos necesarios en el momento justo<br/><br/>
                                        Este servicio te permite subcontratar personal calificado, demanera que se cubran todas las necesidades de conocimientos y habilidades que tu proyecto requiere.<br/><br/>
                                        Necesitas darle un impulso a tu proyecto?<br/>
                                        Ponerte al día con tus objetivos de desarrollo?<br/>
                                        Tienes un proyecto que no puedes atenderlo únicamente con tu personal interno?<br/><br/>
                                        Novatech es la extensión que tu equipo necesita.</p>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Work;