import React from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h4 style={{display:"inline-flex"}}><Link to="/"><div className='minimalLogo'></div></Link></h4>
                            <ul>
                                <li><a href="https://www.facebook.com/novatechuy" className="fa fa-facebook" target="_blank" rel="noopener noreferrer">.</a></li>
                                <li><a href="https://www.linkedin.com/company/novatech-uruguay/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer">.</a></li>
                                <li><Link to="https://www.instagram.com/novatech.uy/" className="fa fa-instagram" target="_blank">.</Link></li>
                            </ul>
                            <p>Copyright <i className="fa fa-copyright"></i> 2022 All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;