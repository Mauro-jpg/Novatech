import React from 'react';
 
class Services extends React.Component {
    render(){
        return (
            <section id="services" className="tab-panel" style={{"margin-top" : "100px", height: "60vh"}}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="section-title">
                                                <h2><span>Servicios en la Nube</span></h2>
                                                    <p>Uno de los principales desafíos de las empresas hoy en día es asegurar la disponibilidad de sus aplicacaciones de negocio, con nuestros servicios de cloud computing usted gana en tranquilidad.

Ofrecemos servicios de respaldos en la nube, servicios de servidores 100% en la nube y contingencia, lo que asegura la continuidad de su negocio pase lo que pase.</p>
                                                        <br/><br/><h4>Te conectamos con la nube</h4>                                                
                                                </div>
                                            </div>
                                            
                                            <div className="col50 col-md-6 service">
                                                    <div className="image"></div>
                                            </div>
                                        </div>
                                    </section>
        );
    }
}
 
export default Services;