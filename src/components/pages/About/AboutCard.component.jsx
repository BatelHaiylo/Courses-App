import Heading from "../../features/Heading/Heading.component";
import "./About.css";
import { homeAbout } from "../../../dummydata";
import SiteMiniData from "../../features/Sections/SiteMiniData.component";

export default function AboutCard() {
    return ( 
        <>
        <section className='aboutHome'>
            <div className='container flexSB'>
              <div className='left row'>
                <img src='./images/about.webp' alt='' />
              </div>
              <div className='right row'>
                <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
                <div className='items'>
                  {homeAbout.map((val) => {
                    return (
                      <div className='item flexSB'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        <div className='text'>
                          <h2>{val.title}</h2>
                          <p>{val.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
      </section>
      <SiteMiniData />
        </>
     );
};