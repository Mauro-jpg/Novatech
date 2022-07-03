import React from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h4><Link to="/"><span>a</span>ddax</Link></h4>
                            <ul>
                                <li><Link to="https://www.linkedin.com/company/novatech-uruguay/" className="fa fa-linkedin" target="_blank"></Link></li>
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