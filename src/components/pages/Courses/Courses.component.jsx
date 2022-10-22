import './Course.css';
import Breadcrumb from '../../features/Breadcrumb/Breadcrumb.component';
import OnlineCourses from './OnlineCourses.component';
import CourseCard from '../../features/Card/CourseCard.component';
import { useContext, useState, useEffect } from 'react';
import { coursesContext } from '../../../context/CoursesProvider.component';

export default function Courses() {
    const {courses, setCourses} = useContext(coursesContext)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{setLoading(false)},[courses])

    return ( 
        <div>
            <Breadcrumb title='Explore Courses' />
            <div className='between-sec'></div>
            <OnlineCourses />
            <div className='between-sec'></div>
            <CourseCard courses={courses}/>
            <div className='end-margin'></div>
        </div>
     );
};