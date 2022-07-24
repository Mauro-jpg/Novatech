import React from 'react';
 
class Develop extends React.Component {
    render(){
        return (
            <section id="team" className="tab-panel" style={{"margin-top" : "100px", backgroundColor : "white"}}>
                <div className="row">
                    <div className="col-lg-6 col-md-6 fullwMobile">
                        <div className="section-title">
                        <h2><span>Desarrollo de Software</span></h2>
                            <p>La solución a medida, ágil y eficiente.
                            Desarrollamos soluciones en múltiples plataformas para distintos mercados y destinos
                            <br></br><br></br>
                            Contamos con recursos altamente calificados
                            <br></br><br></br>
                            Nuestra prioridad es brindar una solución a medida de las necesidades detectadas, sin incurrir en tiempos y costos innecesarios, llevando adelante una metodología de trabajo eficiente y conveniente.
                            <br></br>
                            Tomemos un café y conversemos sobre las necesidades existentes en la organización y nosotros nos encargaremos de desarrollar una solución acorde, ágil e innovadora, que ayude a la mejora y automatización de los procesos.
                            </p>                                                                                                    
                        </div>
                    </div>
                    
                    <div className="col50 why-we-different-img noMobileShow">
                            <div className="image"></div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Develop;