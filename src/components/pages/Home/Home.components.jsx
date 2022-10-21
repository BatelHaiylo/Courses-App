import './Home.css';
import Hero from '../../features/Hero/Hero.component';
import SiteMiniData from '../../features/Sections/SiteMiniData.component';
import PopularCourses from '../../features/Sections/PopularCourses.component';
import OnlineCourses from '../Courses/OnlineCourses.component';
import Testimonial from '../../features/Testimonal/Testimonial.component';
import PricingSec from '../../features/Sections/PricingSec.component';

export default function Home() {
    return ( 
        <>
        <Hero/>
        <div className='between-home-sec'></div>
        <PopularCourses/>
        <OnlineCourses/>
        <Testimonial/>
        <PricingSec/>
        <div className='homemarginbottom'></div>
        </>
     );
};