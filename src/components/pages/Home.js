import React from 'react';
import '../../App.css';
import Card from '../Card';
import Footer from '../Footer';
import VideoSection from '../VideoSection';

function Home() {
    return (
        <div>
            <VideoSection />
            <Card />
            <Footer />
        </div>
    );
}

export default Home
