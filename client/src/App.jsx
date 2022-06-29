import './assets/css/bootstrap.min.css';
import 'react-modal-video/css/modal-video.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import './assets/css/font-awesome.min.css';
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/logo.css';

import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import Preloader from './components/Common/Preloader';
import HomeEleven from './components/Pages/HomeEleven';
import Blog from './components/Pages/Blog';
import BlogDetails from './components/Pages/BlogDetails';

class App extends React.Component {

    state = {
        loading: true
    };

    componentDidMount(){
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }

    hashLinkScroll = () => {
        const { hash } = window.location;
        if (hash !== '') {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) element.scrollIntoView();
            }, 0);
        }
    }

    render() {
        return (
            <Router onUpdate={this.hashLinkScroll}>
                <>
                    {this.state.loading ? <Preloader /> : ''}
                    <Navigation />
                    <Route path="/" exact component={HomeEleven} />
                    <Route path="/blog" exact component={Blog} />
                    <Route path="/blog-details" exact component={BlogDetails} />
                </>
            </Router>
        );
    }
}

export default App;
