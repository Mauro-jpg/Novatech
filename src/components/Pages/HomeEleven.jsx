import React from 'react';
import MainBanner from '../PageBanners/MainBannerEleven';
import About from '../Common/About';
import Team from '../Common/Team';
import Services from '../Common/Services';
import Work from '../Common/Work';
import Contact from '../Common/Contact';
import Footer from '../Common/Footer';
import GoTop from '../Common/GoTop';
import DemoSidebar from '../Common/DemoSidebar/DemoSidebar';
 
class HomeEleven extends React.Component {
    render(){
        return (
            <>
                {/* Main Banner */}
                <MainBanner />

                {/* About Area */}
                <About />

                {/* Team Area */}
                <Team />

                {/* Services Area */}
                <Services />

                {/* Work Area */}
                <Work />

                {/* Contact Area */}
                <Contact />

                {/* Footer Area */}
                <Footer />
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
                
                {/* Demo Sidebar */}
                <DemoSidebar />
            </>
        );
    }
}
 
export default HomeEleven;