import './Home.css';
import Hero from '../../features/Hero/Hero.component';
import SiteMiniData from '../../features/Sections/SiteMiniData.component';
import PopularCourses from '../../features/Sections/PopularCourses.component';
import OnlineCourses from '../Courses/OnlineCourses.component';
import Testimonial from '../../features/Testimonal/Testimonial.component';
import PricingSec from '../../features/Sections/PricingSec.component';
import Video from '../../features/Video/Video.component';

export default function Home() {
    return ( 
        <>
        <Hero/>
        {/* <Video src="/video/homeVid.mp4" alt="home video" /> */}
        <div className='between-home-sec'></div>
        <SiteMiniData className='data'/>
        <PopularCourses/>
        <OnlineCourses/>
        <Testimonial/>
        <PricingSec/>
        <div className='end-margin'></div>
        </>
     );
};