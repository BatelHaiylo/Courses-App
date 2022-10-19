import "./Course.css"
import { online } from "../../../dummydata"
import Heading from "../../features/Heading/Heading.component"
export default function OnlineCourses() {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val,index) => (
              <div className='box'key={index}>
                <div className='img'>
                  <img src={val.cover} alt=''/>
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
};