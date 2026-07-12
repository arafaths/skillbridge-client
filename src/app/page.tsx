import FreelanceCategories from '@/components/Home/FreelanceCategories';
import Hero from '@/components/Home/Hero';
import TrustedCompanies from '@/components/Home/TrustedCompanies';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import React from 'react';

const page = () => {
  return (
    <>
      <Hero />
      <TrustedCompanies />
      <FreelanceCategories />
      <WhyChooseUs/>
    </>
  );
};

export default page;