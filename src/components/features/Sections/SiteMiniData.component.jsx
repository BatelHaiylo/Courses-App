import './SiteMiniData.css'
import { awrapper } from "../../../dummydata"

export default function SiteMiniData() {
  return (
    <>
      <section className='mini-data'>
        <div className='container grid'>
          {awrapper.map((val,index) => {
            return (
              <div className='box flex' key={index}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
};