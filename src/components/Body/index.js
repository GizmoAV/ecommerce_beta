import React from 'react';
import './styles.css';
import BannerCarousel from '../Carousel';
import BusinessSection from '../SectionBusiness.js';
import EducationSection from '../SectionEduction.js';
import CountactUS from '../CountactUS';
import Footer from '../Footer';

const MainBody =()=> {
  return (
    <div className='main_body'>
        <BannerCarousel />
        <BusinessSection />
        <EducationSection />
        <CountactUS />        
        <Footer/>
    </div>
  )
}

export default MainBody