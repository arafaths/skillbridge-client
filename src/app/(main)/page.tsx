import FAQ from '@/components/Home/FAQ';
import FeaturedProjects from '@/components/Home/FeaturedProjects';
import FreelanceCategories from '@/components/Home/FreelanceCategories';
import Hero from '@/components/Home/Hero';
import HeroCTA from '@/components/Home/HeroCTA';
import HowItWorks from '@/components/Home/HowItWorks';
import Testimonials from '@/components/Home/Testimonials';
import TrustedCompanies from '@/components/Home/TrustedCompanies';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import React from 'react';

const page = () => {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <FeaturedProjects />
      <FreelanceCategories />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <HeroCTA />
    </>
  );
};

export default page;
