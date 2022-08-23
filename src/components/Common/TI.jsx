import React from 'react';
 
class IT extends React.Component {
    render(){
        return (
            <div id='it' style={{"margin-top" : "50px"}}>
                <section className="strategy-area">
                    <div className="container-fluid p-0">
                        <div className="row ">
                            <div className="col50 col-md-6 TI">
                                <div className="image noSizeMobile noBagroundPositionMobile"></div>
                            </div>
                            
                            <div className="col-lg-6 col-md-7 noSizeWork">
                                <div className="about-strategy">
                                    <div className="section-title">
                                        <h2><span>Soporte T.I.</span></h2>
                                        <p>
                                        Nos encargamos de administrar la infraestructura tecnológica de la organización.
                                        <br></br>
                                        <br></br>
                                        Ponemos a disposición personal técnico capacitado y comprometido para que todo funcione correctamente, creando un departamento de informática independiente de la estructura o tamaño.
                                        <br></br>
                                        <br></br>
                                        Contamos con amplia experiencia en Administración de Centros de cómputos, Administración de Comunicaciones, Seguridad, Servidores, telefonía IP y Servicio a Usuarios.</p>
                                        <br></br>
                                        <p style={{color:"#298ACB"}}><b>Nos encargamos de administrar la infraestructura tecnológica de tu organización.</b></p>
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