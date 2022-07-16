import React from 'react';
 
class Develop extends React.Component {
    render(){
        return (
            <section id="team" className="tab-panel" style={{"margin-top" : "100px", height: "60vh", backgroundColor : "white"}}>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="section-title">
                                                <h2><span>Desarrollo de Software</span></h2>
                                                    <p>Desarrollamos soluciones en múltiples plataformas para distintos mercados y destinos.

Tomemos un café y hablemos sobre tus necesidades puntuales y desarrollaremos una solución acorde, ágil, innovadora y que ayude a la mejora y automatización en tus procesos.

Staff Augmentation Contamos con recursos altamente calificados para sumar a tu equipo o proyectos. Desarrolladores, Project Manager.</p>
                                                                                                    
                                                </div>
                                            </div>
                                            
                                            <div className="col50 why-we-different-img">
                                                    <div className="image"></div>
                                            </div>
                                        </div>
                                    </section>
        );
    }
}
 
export default Develop;