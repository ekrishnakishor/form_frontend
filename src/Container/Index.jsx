import React from 'react';
import CompanyDetails from '../components/companyDetails';
import Map from '../components/Map';
import Partners from '../components/Partners';
import Service from '../components/Service';
import BenefitsSection from "../components/BenefitsSection";
import HowItWorks from '../components/HowItWorks';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

function Index() {
  return (
    <div>
        <CompanyDetails/>
        <BenefitsSection />
        <HowItWorks />
        <FaqSection />
        <Service />
        <Partners />
        <Map />
        <Footer/>
        {/* <Form9061 /> */}
        {/* <Form8850/> */}
    </div>
  )
}

export default Index;