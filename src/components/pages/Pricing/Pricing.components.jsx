import './Pricing.css';
import Breadcrumb from '../../features/Breadcrumb/Breadcrumb.component';
import PriceCard from '../../features/Card/PriceCard.component';
import FAQ from '../../features/FAQS/FAQ.component';

export default function Pricing() {
    return ( 
        <>
        <Breadcrumb  title='Choose The Right Plan'/>
        <section className='price padding'>
            <div className='container grid'>
              <PriceCard />
            </div>
        </section>
        <FAQ />
        </>
     );
};