import React from 'react';
import 'isomorphic-fetch';
 
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
        if (this.state.submitted){
            return (
                <div 
                    className="alert alert-success alert-dismissible fade show" 
                    style={{ marginTop: '20px', marginBottom: '0' }}
                >
                    <strong>Thank you!</strong> Your message is send to the owner.
                    <button 
                        type="button" 
                        className="btn-close"
                        onClick={this.onHideSuccess}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
    }

    render(){
        return (
            <section id="contact" className="contact-area ptb-80 bg-f6f6f6">
                <div className="container">
                    <div className="section-title">
                        <h4>Get in Touch</h4>
                        <h2>Let's <span>Contact</span> Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                      
                            <iframe 
                                title="Google Map" 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.096315031995!2d-56.2029501850252!3d-34.90403238095641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802a2b33be7d%3A0xe259f09f60608e6a!2s25%20de%20Mayo%20747%2C%2011000%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1656889314288!5m2!1ses-419!2suy" 
                                width="100%" 
                                height="392" 
                                loading="lazy"
                            ></iframe>
                            <div className="contact-info">
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker"></i> Exercisplan 4, 111 49 Stockholm, Sweden
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i> 
                                        <a href="mailto:info@novatech.com.uy">info@novatech.com.uy</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i> 
                                        <a href="tel:22049488">22049488</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-form">
                                <h4>Stay Connected</h4>
                                <form id="contactForm" onSubmit={this.onSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="name" 
                                                    id="name" 
                                                    required={true}
                                                    data-error="Please enter your name" 
                                                    value={this.state.formFields.name}
                                                    onChange={this.nameChangeHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    name="email" 
                                                    id="email" 
                                                    required={true}
                                                    data-error="Please enter your email" 
                                                    value={this.state.formFields.email}
                                                    onChange={this.emailChangeHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="number">Phone Number</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="number" 
                                                    id="number" 
                                                    required={true}
                                                    data-error="Please enter your number" 
                                                    value={this.state.formFields.phone}
                                                    onChange={this.phoneChangeHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <textarea 
                                                    name="message" 
                                                    className="form-control" 
                                                    id="message" 
                                                    cols="30" 
                                                    rows="4" 
                                                    required={true}
                                                    data-error="Write your message" 
                                                    value={this.state.formFields.text}
                                                    onChange={this.textChangeHandler}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                            {this.successMessage()} 
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Contact;