import React from 'react';
 
class Staff extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false
    };

    render(){
        return (
            <div id='work'>
                <section className="strategy-area">
                    <div className="container-fluid p-0">
                        <div className="row ">
                            <div className="col-lg-6 col-md-5 ">
                                <div className="image noBagroundPositionMobile noSizeMobile"></div>
                            </div>
                            
                            <div className="col-lg-6 col-md-7">
                                <div className="about-strategy ptb-80">
                                    <div className="section-title">
                                        <h2><span>Staff Augmentation</span></h2>
                                        <p>Proveemos los recursos necesarios en el momento justo
<br></br>
<br></br>
Este servicio permite subcontratar personal calificado, cubriendo todas las necesidades de conocimientos y habilidades que el proyecto requiere.
<br></br>
<br></br>
Es necesario darle un impulso al proyecto?<br></br>
Se necesita poner al día los objetivos de desarrollo?<br></br>
El equipo interno no cuenta con disponibilidad para atender otros proyectos?<br/><br/>
                                        <p style={{color:"#298ACB"}}><b>Novatech es la extensión que tu equipo necesita.</b></p></p>
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
 
export default Staff;