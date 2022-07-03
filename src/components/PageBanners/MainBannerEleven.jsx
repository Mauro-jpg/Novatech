import React from 'react';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';

const particleOpt = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#fff'
        },
        size: {
            value: 3
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
}
 
class MainBanner extends React.Component {
    render(){
        return (
            <div id="home" className="main-banner item-bg-one">
                <div className="creative-banner-three"></div>
                <Particles
                    params={{...particleOpt}}
                />
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="main-banner-text">
                                        <h1>
                                        Nuevas&nbsp;
                                        <ReactTypingEffect
                                                text={['NECESIDADES.', 'TECNOLOGÍAS.', 'SOLUCIONES.']}
                                                speed={100}
                                                eraseDelay={100}
                                            />
                                        </h1>
                                        <p>Desde 2006, Dimensionamos, Implementamos y Administramos las soluciones tecnológicas que tu empresa necesita.
Somos tu socio tecnológico, basamos nuestros servicios en la confianza, la buena comunicación y la agilidad para brindarte soluciones flexibles, seguras y de alto impacto que te ayuden a lograr tus objetivos.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MainBanner;