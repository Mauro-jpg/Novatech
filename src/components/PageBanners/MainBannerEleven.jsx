import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

import PartoclesBackground from './particles';
 
class MainBanner extends React.Component {
    render(){
        return (
            <div id="home" className="main-banner item-bg-one">
                <PartoclesBackground />
                <div className="creative-banner-three"></div>
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
                                                eraseDelay={1100}
                                            />
                                        </h1>
                                        <p>Desde 2016 nos enfocamos en el dimensionamiento,
                                        implementación y administración de las soluciones tecnológicas que su empresa necesita.
                                        <br></br>
                                        Nuestros pilares son la confianza, la buena comunicación y la agilidad para brindar soluciones flexibles, seguras y de alto impacto que le ayuden a lograr sus objetivos, convirtiéndonos en un socio tecnológico clave para la organización.</p>
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