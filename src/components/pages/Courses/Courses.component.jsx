import './Course.css';
import Breadcrumb from '../../features/Breadcrumb/Breadcrumb.component';
import OnlineCourses from './OnlineCourses.component';
import CourseCard from '../../features/Card/CourseCard.component';

export default function Courses() {
    return ( 
        <div>
            <Breadcrumb title='Explore Courses' />
            <div className='between-sec'></div>
            <OnlineCourses />
            <div className='between-sec'></div>
            <CourseCard />
            <div className='end-margin'></div>
        </div>
     );
};