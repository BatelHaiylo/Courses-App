import "../../pages/Courses/Course.css";
// import { coursesCard } from "../../../dummydata";
import StyledCard from "./Card.component";

export default function CourseCard({ courses }) {
  return (
    <>
      {console.log(courses)}
      <section className="coursesCard">
        <div className="container grid2">
          {courses ? (
            Object.values(courses).map((val, index) => (
              <StyledCard className="items" key={index}>
                <div className="content flex">
                  <div className="left">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h1>{val.courseName}</h1>
                    <div className="rate">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <label htmlFor="">(5.0)</label>
                    </div>
                    <div className="details">
                      {Object.values(val.teacher).map((details, index) => (
                        <>
                          <div className="box" key={index}>
                            <div className="dimg">
                              <h4>{details.name}</h4>
                            </div>
                            <div className="para">
                              <h4>{details.work}</h4>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="price">
                  <h3>{val.classes}</h3>
                </div>
                <button className="outline-btn">ENROLL NOW !</button>
              </StyledCard>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
}
