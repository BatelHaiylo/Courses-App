import './Course.css';
import Breadcrumb from '../../features/Breadcrumb/Breadcrumb.component';
import OnlineCourses from './OnlineCourses.component';
import CourseCard from './CourseCard.component'; 

export default function Courses() {
    return ( 
        <div>
            <Breadcrumb title='Explore Courses' />
            <CourseCard />
            <OnlineCourses />
            <div className='end-margin'></div>
        </div>
     );
};