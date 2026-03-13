import React from 'react';
import Hero from '../components/Hero';
import PopularCourses from '../components/PopularCourses';
import CTABanner from '../components/CTABanner';
import { FeaturedCollegesAbroad, FeaturedCollegesIndia } from '../components/CollegeCard';
import StatsSection from '../components/StatsSection';
import Services from '../components/Services';
import ArticlesWebinars from '../components/ArticlesWebinars';
import Testimonials from '../components/Testimonials';
import CallbackBanner from '../components/CallbackBanner';

const Home = () => {
    return (
        <>
            <Hero />
            <PopularCourses />
            <CTABanner />
            <FeaturedCollegesAbroad />
            <StatsSection />
            <FeaturedCollegesIndia />
            <Services />
            <ArticlesWebinars />
            <Testimonials />
            <CallbackBanner />
        </>
    );
};

export default Home;
