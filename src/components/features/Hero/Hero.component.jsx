import './Hero.css';
import Heading from '../Heading/Heading.component';
import Video from '../Video/Video.component';

export default function Hero() {
    return ( 
        <>
        <section className='hero'>
          <div className='container'>
            <div className='row'>
              <Heading subtitle='WELCOME TO GURU DD' title='Best Online Education Expertise' />
             <Video src="/video/homeVid.mp4" alt="home video"/>
              <div className='button'>
                <button className='primary-btn'>
                  GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button className='course-btn'>
                  VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='margin'></div>
        </>
    );
};