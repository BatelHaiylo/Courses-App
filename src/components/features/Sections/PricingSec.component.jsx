import Heading from "../Heading/Heading.component";
import PriceCard from "../Card/PriceCard.component";

export default function PricingSec() {
  return (
    <>
      <section className='hprice-padding'>
        <Heading subtitle='OUR PRICING' title='Pricing & Packages' />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
};