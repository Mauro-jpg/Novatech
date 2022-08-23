import React from 'react';
import 'isomorphic-fetch';
const { sendMail } = require('../../sendMail');

class Contact extends React.Component {
    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            phone: '',
            text: ''
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            if (res.status === 200) {
                this.setState({ submitted: true })
            }
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.text = '';
            this.setState({formFields});
        });
    }

    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({formFields});
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({formFields});
    }

    phoneChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.phone = e.target.value;
        this.setState({formFields});
    }

    textChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.text = e.target.value;
        this.setState({formFields});
    }

    onHideSuccess = () => {
        this.setState({submitted: false});
    }

    successMessage = () => {
        console.log(this.state);
    }

    render(){
        return (
            <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2><span>Contactanos</span></h2>
                    </div>
                    <div style={{"display": "inline-flex", width: "100%"}}>
                        <div style={{width:"50%"}}>
                            <div className="col-md-12">

                                <iframe 
                                    title="Google Map" 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.096315031995!2d-56.2029501850252!3d-34.90403238095641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802a2b33be7d%3A0xe259f09f60608e6a!2s25%20de%20Mayo%20747%2C%2011000%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1656889314288!5m2!1ses-419!2suy" 
                                    width="100%" 
                                    height="392" 
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                        <div style={{width:"45%", "marginLeft" : "5%"}}>
                            <div className="contact-info">
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker"></i> 25 de Mayo 747
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i> 
                                        <a href="mailto:niev.mauro@gmail.com">info@novatech.com.uy</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i> 
                                        <a href="tel:+598 2204 9488">+598 2204 9488</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Contact;