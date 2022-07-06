import React from 'react';
import MainBanner from '../PageBanners/MainBannerEleven';
import IT from '../Common/IT';
import Develop from '../Common/Develop';
import Services from '../Common/Services';
import Staff from '../Common/Work';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
import GoTop from '../Common/GoTop';
 
class HomeEleven extends React.Component {
    render(){
        return (
            <>
                {/* Main Banner */}
                <MainBanner />

                {/* Developer Area */}
                <Develop />
    
                {/* Staff Area */}
                <Staff />

                {/* Services Area */}
                <Services />

                {/* IT Area */}
                <IT />

                {/* Contact Area */}
                <Contact />

                {/* Footer Area */}
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
                
            </>
        );
    }
}
 
export default HomeEleven;