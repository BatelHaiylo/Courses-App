import './Community.css';
import Breadcrumb from '../../features/Breadcrumb/Breadcrumb.component';
import CommunityCard from '../../features/Card/CommunityCard.component';

export default function Community() {
    return ( 
        <div>
            <Breadcrumb title='Browse our community' />
            <section className='community padding'>
              <div className='container grid2'>
                <CommunityCard />
              </div>
            </section>
        </div>
     );
};