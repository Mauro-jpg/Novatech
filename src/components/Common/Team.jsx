import React from 'react';
import { Link } from 'react-router-dom';
import imgTwo from '../../assets/images/different-img2.jpg';

const options = {
    loop: true,
    autoplay:true,
    nav: false,
    margin: 30,
    mouseDrag: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    dots: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        }
    }
}
 
class Team extends React.Component {
    render(){
        return (
            <section id="team" className="tab-panel">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="section-title">
                                                <h2><span>Desarrollo de Software</span></h2>
                                                    <p>Desarrollamos soluciones en múltiples plataformas para distintos mercados y destinos.

Tomemos un café y hablemos sobre tus necesidades puntuales y desarrollaremos una solución acorde, ágil, innovadora y que ayude a la mejora y automatización en tus procesos.

Staff Augmentation Contamos con recursos altamente calificados para sumar a tu equipo o proyectos. Desarrolladores, Project Manager.</p>
                                                                                                    
                                                </div>
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6">
                                                <div className="why-we-different-img">
                                                    <img src={imgTwo} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </section>
        );
    }
}
 
export default Team;