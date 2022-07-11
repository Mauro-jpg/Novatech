import React from 'react';
import { Link } from 'react-router-dom';
 
class IT extends React.Component {
    render(){
        return (
            <div id='it' style={{"margin-top" : "50px"}}>
                <section className="strategy-area">
                    <div className="container-fluid p-0">
                        <div className="row ">
                            <div className="col-lg-6 col-md-5 col50">
                                <video autoPlay muted loop>         
                                    <source src="/it.mp4" type="video/mp4"/>       
                                </video>
                            </div>
                            
                            <div className="col-lg-6 col-md-7">
                                <div className="about-strategy ptb-80">
                                    <div className="section-title">
                                        <h2><span>Soporte IT</span></h2>
                                        <p>Te apoyamos en la administración de tu infraestructura de tecnología. Contarás con un departamento de informática independiente de tu estructura o tamaño. Apoyado con personal técnico capacitado y comprometido para que todo funcione correctamente.

    Te ofrecemos asesoría en tecnología para asegurarte que tu empresa estará actualizada y aplicando las mejores herramientas y soluciones para tu negocio.

    Contamos con amplia experiencia en Administracion de Centros de Computos, Administración de Comunicaciones, Servidores, Telefonia IP y Servicio a Usuarios.</p>
                                        <br></br>
                                        <h4 style={{color:"#298ACB"}}><b>Dimensionamos, Implementamos y Administramos tu infraestructura de T.I.</b></h4>
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
 
export default IT;