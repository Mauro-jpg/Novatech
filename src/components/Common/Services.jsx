import React from 'react';
import Image from '../../assets/images/nube.png'
 
class Services extends React.Component {
    render(){
        return (
            <section id="services" className="tab-panel" style={{"margin-top" : "100px"}}>
                                        <div className="row invertedMobile">
                                            <div className="col-lg-6 col-md-6 uno noSizeWork">
                                                <div className="section-title">
                                                <h2><span>Servicios en la Nube</span></h2>
                                                    <p>Obtenga tranquilidad y disponibilidad.<br></br>
                                                    Ahorre costos, espacio y energía.<br></br>
                                                    <br></br>
                                                    Uno de los principales desafíos actuales de
                                                    las empresas es asegurar la disponibilidad
                                                    de sus aplicaciones de negocio, poder
                                                    escalar con rapidez y a costos acordes.
                                                    <br></br>
                                                    Obtenga tranquilidad a través de nuestros
                                                    servicios de cloud computing.
                                                    <br></br>
                                                    <br></br>
                                                    OFRECEMOS:
                                                    <ul>
                                                        <li>Respaldos en la nube</li>
                                                        <li>Servidores en la nube</li>
                                                        <li>Contingencia asegurando la continuidad
                                                        del negocio en todo momento y circunstancia.
                                                        </li>
                                                    </ul>
                                                    </p>
                                                        <br/><br/><p style={{color:"#298ACB"}} ><b>Sube a la nube junto a nuestro equipo</b></p>                                                
                                                </div>
                                            </div>
                                            
                                            <div className="col50 col-md-6 service dos">
                                                <div className="image noSizeMobile noBagroundPositionMobile"></div>
                                            </div>
                                        </div>
                                    </section>
        );
    }
}

//

 
export default Services;