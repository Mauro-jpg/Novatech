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
servicios de cloud computing.</p>
                                                        <br/><br/><p style={{color:"#298ACB"}} ><b>Te conectamos con la nube</b></p>                                                
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