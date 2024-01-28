import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ImageSlider from '../ImageSlider/ImageSlider';
import Body from '../Body/Body';

function Home(){
    return(
        <>
            <Header/>
            
            <ImageSlider/>
            
            <Body></Body>  
            
            <Footer/>
        
        </>
    );
}
export default Home